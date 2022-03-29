import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import share from "../../assets/Share.svg";
import emma from "../../assets/emma-shape.svg";
import { WithLocalSvg } from "react-native-svg";
import Background from "../../components/Background";
import { useDispatch, useSelector } from "react-redux";
import Emma from "../../assets/EmmaShape2.svg";
import IntroductionCard from "../../components/IntroductionCard";
import PopUp from "../../components/PopUp";
import TextEditor from "../../components/TextEditor/TextEditor";
import PlusButton from "../../components/PlusButton";
import { deleteItem, getValueFor } from "../../functions/SecureStoreFunctions";
import { getMyInfo } from "../../actions/UserActions";
import { SET_CURRENT } from "../../reducers/currentPopUp";
import down from "../../assets/내리기.svg";
import up from "../../assets/올리기.svg";
import ProfilePic from "../../assets/profilePic.svg";
import { updateUser } from "../../functions/updateUser";
import axios from "axios";
import { API } from "../../lib/API";
import PopUpEdit from "../../components/PopUpEdit";
import IconSelector from "../../components/IconSelector";
import Card from "../../components/Card";
import * as Linking from "expo-linking";
import SNSPopUp from "./SNSPopUp";
import { LOADING_END, LOADING_START } from "../../reducers/loading";
import StoryCard from "../../components/StoryCard";

let image = require("../../assets/Vector.png");
function MyButton3({ text, onPress }) {
  return (
    <View style={styles3.myButton}>
      <Text style={{ color: "#5C5C5C", fontWeight: "600", fontSize: 11 }}>
        {text}
      </Text>
    </View>
  );
}
const screenHeight = Dimensions.get("window").height;

export default function MainScreen({ buttonClick, navigation }) {
  const userInfo = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [snsVisible, setSnsVisible] = useState(false);
  const [y, setY] = useState(0);
  const [y2, setY2] = useState(0);
  const currentPopUp = useSelector((state) => state.current);
  const [updatedUser, setUpdatedUser] = useState({});
  const [modifyMode, setModifyMode] = useState(true);
  const currentContent = useSelector((state) => state.contents);
  const [customOrder, setCustomOrder] = useState([]);

  const dispatch = useDispatch();

  const updateUser = async () => {
    const updatedUser = {
      ...userInfo,
      customOrder,
    };
    if (updatedUser !== userInfo) {
      dispatch({ type: LOADING_START });
      await axios.put(`${API}/auth/user`, { updatedUser }).then((res) => {
        dispatch({ type: LOADING_END });
        if (res.data.status === "success") {
          getValueFor("token").then((token) => {
            if (token) {
              dispatch(getMyInfo(token));
            }
          });
          setModifyMode(true);
        } else {
          Alert.alert(
            "경고",
            typeof response.data.error === "string"
              ? response.data.error
              : "예기치 못한 오류가 발생했습니다."
          );
          setModifyMode(true);
        }
      });
    } else {
      setModifyMode(true);
    }
  };

  useEffect(() => {
    getValueFor("token").then((token) => {
      if (token) {
        dispatch(getMyInfo(token));
      }
    });
  }, []);

  useEffect(() => {
    if (userInfo === "not-yet") {
      getValueFor("token").then((token) => {
        if (token) {
          dispatch(getMyInfo(token));
        }
      });
    } else if (userInfo === false) {
      navigation.reset({ routes: [{ name: "loginScreen" }] });
    } else {
      setCustomOrder(
        userInfo?.customOrder
          ? userInfo.customOrder
          : ["interests", "qualifies", "majors"]
      );
    }
  }, [userInfo]);

  const swapOrder = (a, b) => {
    const aValue = customOrder[a];
    const bValue = customOrder[b];
    const result = customOrder.map((item, index) => {
      if (index === a) {
        return bValue;
      } else if (index === b) {
        return aValue;
      } else {
        return item;
      }
    });
    setCustomOrder(result);
  };

  return (
    <>
      {modifyMode ? (
        <Background>
          <PopUp
            visible={visible}
            y={y}
            setVisible={setVisible}
            modifyMode={modifyMode}
            setModifyMode={setModifyMode}
          />
          <SNSPopUp visible={snsVisible} setVisible={setSnsVisible} />
          <View style={{ height: screenHeight, width: "100%", flex: 1 }}>
            <ScrollView
              style={styles3.all}
              onScroll={(e) => setY(e.nativeEvent.contentOffset.y)}
              scrollEventThrottle={16}
              contentContainerStyle={{ paddingBottom: 30 }}
            >
              <View style={{ flex: 1, minHeight: screenHeight + 100 }}>
                <View style={styles3.top}>
                  <TouchableOpacity
                    onPress={() =>
                      console.log(userInfo?.interests[0]?.contents)
                    }
                  >
                    <WithLocalSvg width={32} height={32} asset={share} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#333333",
                      fontSize: 18,
                      fontWeight: "700",
                      paddingBottom: 4,
                    }}
                  >
                    ABOUT ME
                  </Text>
                  <TouchableOpacity onPress={() => setModifyMode(false)}>
                    <WithLocalSvg width={32} height={32} asset={emma} />
                  </TouchableOpacity>
                </View>

                <View style={styles3.introduction}>
                  {userInfo.photoURL ? (
                    <View>
                      <Image
                        style={{
                          width: 105,
                          height: 105,
                          resizeMode: "cover",
                          borderWidth: 0,
                          borderRadius: 105,
                        }}
                        source={{
                          uri: `data:image/png;base64, ${userInfo.photoURL}`,
                        }}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        borderRadius: 105,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: "#C8D7FF",
                      }}
                    >
                      <WithLocalSvg
                        width={105}
                        height={105}
                        borderRadius={105}
                        fill={"#000000"}
                        asset={ProfilePic}
                      />
                    </View>
                  )}
                  <View
                    style={{
                      paddingStart: 29,
                      alignItems: "flex-start",
                      width: "56%",
                    }}
                  >
                    <Text
                      style={{
                        color: "#333333",
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      {userInfo?.name}
                    </Text>
                    <Text
                      style={{
                        marginTop: 14,
                        color: "#5C5C5C",
                        fontSize: 11,
                        fontWeight: "700",
                      }}
                    >
                      {userInfo?.selfIntroduction}
                    </Text>
                    <TouchableOpacity onPress={() => setSnsVisible(true)}>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontWeight: "500",
                          marginTop: 22,
                        }}
                      >
                        CONTACT ME
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles3.story}>
                  <Image
                    style={{
                      position: "absolute",
                      height: 600,
                      width: "100%",
                      zIndex: 0,
                    }}
                    source={image}
                  />
                  <View
                    style={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <WithLocalSvg width={32} height={33} asset={Emma} />
                    <Text
                      style={{
                        marginLeft: 22,
                        color: "#333333",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                    >
                      INTRODUCTION
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 7,
                    }}
                  >
                    {customOrder?.map((item, i) => (
                      <Card
                        setVisible={setVisible}
                        type={item}
                        modifyMode={modifyMode}
                        key={i}
                        left={i === 1 ? false : true}
                        setModifyMode={setModifyMode}
                      />
                    ))}
                  </View>

                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        marginTop: 10,
                        height: 31.17,
                        width: 70,
                        marginBottom: -15,
                        borderRadius: 20,
                        backgroundColor: "#C8D7FF",
                        alignItems: "center",
                        paddingTop: 5.2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#5C5C5C",
                          fontSize: 11,
                          fontWeight: "700",
                        }}
                      >
                        STORY
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        borderRadius: 32,
                        backgroundColor: "#C8D7FF",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                      }}
                    >
                      <View
                        style={{
                          width: "10%",
                          height: "100%",
                          display: "flex",
                          marginTop: 25,
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        {/* <View
                          style={{
                            position: "absolute",
                            backgroundColor: "#7CA0FF",
                            width: 2,
                            height: "80%",
                            alignSelf: "center",
                            top: 20,
                          }}
                        ></View> */}
                        {userInfo?.stories?.map((story, i) => {
                          return (
                            <View
                              style={{
                                width: 60,
                                height: 60,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 10,
                              }}
                              key={i}
                            >
                              <WithLocalSvg
                                width={32}
                                height={33}
                                asset={emma}
                              />
                            </View>
                          );
                        })}
                      </View>
                      <View
                        style={{
                          width: "90%",
                          padding: 12,
                          display: "flex",
                          height: "100%",
                        }}
                      >
                        {userInfo?.stories?.map((story, i) => {
                          return (
                            <StoryCard
                              key={i}
                              title={story.title}
                              image={story.storyImage}
                              toRenderArray={story.contents}
                              setVisible={setVisible}
                              index={i}
                            />
                          );
                        })}
                        <PlusButton
                          onPress={() => {
                            setVisible(true);
                            setModifyMode(false);
                            dispatch({
                              type: SET_CURRENT,
                              payload: {
                                type: "stories",
                                index: userInfo.stories?.length || 0,
                              },
                            });
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Background>
      ) : (
        <Background>
          <PopUp
            visible={visible}
            y={y}
            setVisible={setVisible}
            modifyMode={modifyMode}
            setModifyMode={setModifyMode}
          />
          <PopUpEdit
            visible={visible2}
            y={y2}
            setVisible={setVisible2}
            backButtonPress={() => setVisible2(false)}
            navigation={navigation}
          />
          <View style={{ height: screenHeight, width: "100%", flex: 1 }}>
            <ScrollView
              style={styles32.all}
              onScroll={(e) => setY(e.nativeEvent.contentOffset.y)}
              scrollEventThrottle={16}
              contentContainerStyle={{ paddingBottom: 30 }}
            >
              <View style={{ flex: 1, minHeight: screenHeight + 100 }}>
                <View style={styles32.top}>
                  <TouchableOpacity>
                    <WithLocalSvg width={32} height={32} asset={share} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#333333",
                      fontSize: 18,
                      fontWeight: "700",
                      paddingBottom: 4,
                    }}
                  >
                    ABOUT ME
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (customOrder !== userInfo?.customOrder) {
                        dispatch({ type: LOADING_START });
                        updateUser();
                      } else {
                        setModifyMode(true);
                      }
                    }}
                  >
                    <WithLocalSvg width={32} height={32} asset={emma} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles32.introduction}
                  onPress={() => {
                    setVisible2(true);
                  }}
                >
                  {userInfo.photoURL ? (
                    <View>
                      <Image
                        style={{
                          width: 105,
                          height: 105,
                          resizeMode: "cover",
                          borderWidth: 0,
                          borderRadius: 105,
                        }}
                        source={{
                          uri: `data:image/png;base64, ${userInfo.photoURL}`,
                        }}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        borderRadius: 105,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: "#C8D7FF",
                      }}
                    >
                      <WithLocalSvg
                        width={105}
                        height={105}
                        borderRadius={105}
                        fill={"#000000"}
                        asset={ProfilePic}
                      />
                    </View>
                  )}
                  <View
                    style={{
                      paddingStart: 29,
                      alignItems: "flex-start",
                      width: "56%",
                    }}
                  >
                    <Text
                      style={{
                        color: "#333333",
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      {userInfo?.name}
                    </Text>
                    <Text
                      style={{
                        marginTop: 14,
                        color: "#5C5C5C",
                        fontSize: 11,
                        fontWeight: "700",
                      }}
                    >
                      {userInfo?.selfIntroduction}
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500",
                        marginTop: 22,
                      }}
                    >
                      CONTACT ME
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={styles32.story}>
                  <Image
                    style={{
                      position: "absolute",
                      height: 600,
                      width: "100%",
                      zIndex: 0,
                    }}
                    source={image}
                  />
                  <View
                    style={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <WithLocalSvg width={32} height={33} asset={Emma} />
                    <Text
                      style={{
                        marginLeft: 22,
                        color: "#333333",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                    >
                      INTRODUCTION
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 7,
                    }}
                  >
                    {customOrder?.map((item, i) => {
                      if (i === 0) {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                            }}
                            key={i}
                          >
                            <TouchableOpacity
                              onPress={() => swapOrder(i, i + 1)}
                            >
                              <WithLocalSvg
                                width={32}
                                height={32}
                                asset={down}
                              />
                            </TouchableOpacity>

                            <Card
                              setVisible={setVisible}
                              type={item}
                              toRenderArray={userInfo?.interests}
                              modifyMode={modifyMode}
                              left={true}
                              setModifyMode={setModifyMode}
                            />
                          </View>
                        );
                      } else if (i === 1) {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                            }}
                            key={i}
                          >
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => swapOrder(i, i - 1)}
                              >
                                <WithLocalSvg
                                  width={32}
                                  height={32}
                                  asset={up}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => swapOrder(i, i + 1)}
                              >
                                <WithLocalSvg
                                  width={32}
                                  height={32}
                                  asset={down}
                                />
                              </TouchableOpacity>
                            </View>
                            <Card
                              setVisible={setVisible}
                              type={item}
                              toRenderArray={userInfo?.qualifies}
                              modifyMode={modifyMode}
                              left={false}
                              setModifyMode={setModifyMode}
                            />
                          </View>
                        );
                      } else {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                            }}
                            key={i}
                          >
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => swapOrder(i, i - 1)}
                              >
                                <WithLocalSvg
                                  width={32}
                                  height={32}
                                  asset={up}
                                />
                              </TouchableOpacity>
                            </View>
                            <Card
                              setVisible={setVisible}
                              type={item}
                              toRenderArray={userInfo?.majors}
                              modifyMode={modifyMode}
                              left={true}
                              setModifyMode={setModifyMode}
                            />
                          </View>
                        );
                      }
                    })}
                  </View>

                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        marginTop: 10,
                        height: 31.17,
                        width: 70,
                        marginBottom: -15,
                        borderRadius: 20,
                        backgroundColor: "#C8D7FF",
                        alignItems: "center",
                        paddingTop: 5.2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#5C5C5C",
                          fontSize: 11,
                          fontWeight: "700",
                        }}
                      >
                        STORY
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        borderRadius: 32,
                        backgroundColor: "#C8D7FF",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                      }}
                    >
                      <View
                        style={{
                          width: "10%",
                          height: "100%",
                          display: "flex",
                          marginTop: 25,
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        {/* <View
                          style={{
                            position: "absolute",
                            backgroundColor: "#7CA0FF",
                            width: 2,
                            height: "80%",
                            alignSelf: "center",
                            top: 20,
                          }}
                        ></View> */}
                        {userInfo?.stories?.map((story, i) => {
                          return (
                            <View
                              style={{
                                width: 60,
                                height: 60,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 10,
                              }}
                              key={i}
                            >
                              <WithLocalSvg
                                width={32}
                                height={33}
                                asset={emma}
                              />
                            </View>
                          );
                        })}
                      </View>
                      <View
                        style={{
                          width: "90%",
                          padding: 12,
                          display: "flex",
                          height: "100%",
                        }}
                      >
                        {userInfo?.stories?.map((story, i) => {
                          return (
                            <StoryCard
                              key={i}
                              title={story.title}
                              image={story.storyImage}
                              toRenderArray={story.contents}
                              setVisible={setVisible}
                              index={i}
                            />
                          );
                        })}
                        <PlusButton
                          onPress={() => {
                            setVisible(true);
                            dispatch({
                              type: SET_CURRENT,
                              payload: {
                                type: "stories",
                                index: userInfo.stories?.length || 0,
                              },
                            });
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Background>
      )}
    </>
  );
}

const styles3 = StyleSheet.create({
  myButton: {
    position: "relative",
    zIndex: 2,
    top: 9,
    height: 18,
    width: 68,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 11,
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    width: "100%",

    flex: 1,
  },
  top: {
    width: "100%",
    height: screenHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingTop: 41,
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "2%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  tab: {
    color: "#C8D7FF",
    fontSize: 9,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
  story: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "2%",
  },
});

const styles32 = StyleSheet.create({
  myButton: {
    position: "relative",
    zIndex: 2,
    top: 9,
    height: 18,
    width: 68,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 11,
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    width: "100%",

    flex: 1,
  },
  top: {
    width: "100%",
    height: screenHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingTop: 41,
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#C8D7FF",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "2%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  tab: {
    color: "#C8D7FF",
    fontSize: 9,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
  story: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "2%",
  },
});
