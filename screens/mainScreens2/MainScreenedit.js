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

export default function MainScreenEdit(buttonClick) {
  const userInfo = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [y, setY] = useState(0);
  const currentPopUp = useSelector((state) => state.current);

  const dispatch = useDispatch();

  useEffect(() => {
    getValueFor("token").then((token) => {
      if (token) {
        dispatch(getMyInfo(token));
      }
    });
  }, []);

  return (
    <Background>
      <PopUp
        visible={visible}
        y={y}
        setVisible={setVisible}
        backButtonPress={() => setVisible(false)}
      />
      <View style={{ height: screenHeight, width: "100%", flex: 1 }}>
        <ScrollView
          style={styles3.all}
          onScroll={(e) => setY(e.nativeEvent.contentOffset.y)}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 60 }}
        >
          <View style={{ flex: 1, minHeight: screenHeight + 100 }}>
            <View style={styles3.top}>
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
              <TouchableOpacity onPress={() => deleteItem("token")}>
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
                    backgroundColor: "#333333",
                    borderRadius: 105,
                    width: 105,
                    height: 105,
                  }}
                />
              )}
              <View
                style={{
                  paddingStart: 29,
                  alignItems: "flex-start",
                  width: "56%",
                }}
              >
                <Text
                  style={{ color: "#333333", fontSize: 16, fontWeight: "700" }}
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
                    color: "#5C5C5C",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 22,
                  }}
                >
                  {/* {userInfo?.snsLinks} */}
                </Text>
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
                <View
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      paddingRight: "4%",
                    }}
                  >
                    <TouchableOpacity onPress={() => deleteItem("token")}>
                      <WithLocalSvg width={32} height={32} asset={down} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <MyButton3 text={"관심직무"}></MyButton3>
                    <IntroductionCard
                      buttonClick={() => {
                        setVisible(true);
                        dispatch({
                          type: SET_CURRENT,
                          payload: { type: "interests", index: 0 },
                        });
                      }}
                      left={true}
                    >
                      <Text style={styles3.tab}>탭하여 팝업 열기</Text>
                    </IntroductionCard>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      paddingRight: "4%",
                    }}
                  >
                    <TouchableOpacity onPress={() => deleteItem("token")}>
                      <WithLocalSvg width={32} height={32} asset={up} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteItem("token")}>
                      <WithLocalSvg width={32} height={32} asset={down} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <MyButton3 text={"자격사항"}></MyButton3>
                    <IntroductionCard
                      buttonClick={() => {
                        setVisible(true);
                        dispatch({
                          type: SET_CURRENT,
                          payload: { type: "qualifications", index: 0 },
                        });
                      }}
                    >
                      <Text style={styles3.tab}>탭하여 팝업 열기</Text>
                    </IntroductionCard>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      paddingRight: "4%",
                    }}
                  >
                    <TouchableOpacity onPress={() => deleteItem("token")}>
                      <WithLocalSvg width={32} height={32} asset={up} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteItem("token")}>
                      <WithLocalSvg width={32} height={32} asset={down} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <MyButton3 text={"전공"}></MyButton3>
                    <IntroductionCard
                      buttonClick={() => {
                        setVisible(true);
                        dispatch({
                          type: SET_CURRENT,
                          payload: { type: "majors", index: 0 },
                        });
                      }}
                      left={true}
                    >
                      <Text style={styles3.tab}>탭하여 팝업 열기</Text>
                    </IntroductionCard>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 31.17,
                    width: 68,
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

                  <View
                    style={{
                      height: "800%",
                      width: "530%",
                      borderRadius: 32,
                      backgroundColor: "#C8D7FF",
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "20%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <View style={{ marginBottom: "2%", marginLeft: "6%" }}>
                        <TouchableOpacity onPress={() => deleteItem("token")}>
                          <WithLocalSvg width={32} height={32} asset={up} />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "10%",
                        }}
                      >
                        <WithLocalSvg width={32} height={33} asset={emma} />
                        <PlusButton
                          onPress={() => {
                            setVisible(true);
                            dispatch({
                              type: SET_CURRENT,
                              payload: { type: "stories", index: 0 },
                            });
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
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
    alignContent: "flex-end",
    justifyContent: "center",
    marginTop: 38,
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
    marginTop: 48,
  },
});
