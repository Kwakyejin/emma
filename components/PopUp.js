import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { WithLocalSvg } from "react-native-svg";
import BackButtonImg from "../assets/BackButton.svg";
import ModifyButtonImg from "../assets/ModifyButton.svg";
import BoldIcon from "../assets/textEditor/bold.png";
import ItalicIcon from "../assets/textEditor/italic.png";
import UnderlineIcon from "../assets/textEditor/underline.png";
import StrikeThrough from "../assets/textEditor/strikethrough.png";
import LineBreak from "../assets/textEditor/line_break.png";
import { vh } from "react-native-expo-viewport-units";
import { TouchableOpacity } from "react-native";
import TextEditor from "./TextEditor/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { INIT_CURRENT, SET_CURRENT } from "../reducers/currentPopUp";
import { INIT_CONTETNS, SET_CONTENTS } from "../reducers/contents";
import WhiteEmma from "../assets/WhiteEmma.png";
import emma from "../assets/EmmaShape2.svg";
import gallery from "../assets/Gallery.svg";
import IconSelector from "./IconSelector";
import { getPng } from "../functions/getPng";
import axios from "axios";
import { API } from "../lib/API";
import { LOADING_END, LOADING_START } from "../reducers/loading";
import TextViewer from "./TextEditor/TextViewer";
import { getValueFor } from "../functions/SecureStoreFunctions";
import { getMyInfo } from "../actions/UserActions";
import DatePicker from "./DatePicker";

const PopUp = ({
  visible,
  backButtonPress,
  modifyButtonPress,
  modifyMode,
  setModifyMode,
  children,
  setVisible,
  y,
}) => {
  const userInfo = useSelector((state) => state.user);
  const currentPopUp = useSelector((state) => state.current);
  const contents = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("");
  const [iconVisible, setIconVisible] = useState(false);
  const [isStory, setIsStory] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [currentInput, setCurrentInput] = useState(0);
  useEffect(() => {
    if (
      currentPopUp?.type === "interests" &&
      userInfo?.interests[currentPopUp.index]
    ) {
      setIcon(userInfo?.interests[currentPopUp.index].icon);
    } else if (
      currentPopUp?.type === "qualifies" &&
      userInfo?.qualifies[currentPopUp.index]
    ) {
      setIcon(userInfo?.qualifies[currentPopUp.index].icon);
    } else if (
      currentPopUp?.type === "majors" &&
      userInfo?.majors[currentPopUp.index]
    ) {
      setIcon(userInfo?.majors[currentPopUp.index].icon);
    }
    return () => setIcon("");
  }, [currentPopUp]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
    });
    if (!result.cancelled) {
      dispatch({
        type: SET_CURRENT,
        payload: { ...currentPopUp, storyImage: result.base64 },
      });
    }
  };
  useEffect(() => {
    if (currentPopUp?.type === "stories") {
      //스토리일 경우와 아닐 경우 팝업의 생김새가 다르기 때문에 여기서 분기를 해줌
      setIsStory(true);
    } else {
      setIsStory(false);
    }
    return () => {
      setIsStory(false);
    };
  }, [currentPopUp]);

  const updateUser = async (updatedUser) => {
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
          dispatch({ type: INIT_CONTETNS });
          setIcon("");
          setVisible(false);
        } else {
          Alert.alert(
            "경고",
            typeof response.data.error === "string"
              ? response.data.error
              : "예기치 못한 오류가 발생했습니다."
          );
          setVisible(false);
          dispatch({ type: INIT_CONTETNS });
          setIcon("");
        }
      });
    } else {
      getValueFor("token").then((token) => {
        if (token) {
          dispatch(getMyInfo(token));
        }
      });
      setVisible(false);
      dispatch({ type: INIT_CONTETNS });
      setIcon("");
    }
  };

  const uploadContent = async (type, contents, id) => {
    dispatch({ type: LOADING_START });
    if (contents.length > 0) {
      if (type === "interests") {
        const interests = {
          icon,
          contents,
        };

        if (userInfo.interests[currentPopUp.index]) {
          const interestsArray = userInfo?.interests.map((item, i) =>
            i === currentPopUp.index ? interests : item
          );
          const updatedUser = { ...userInfo, interests: interestsArray };
          updateUser(updatedUser);
        } else {
          await axios
            .post(`${API}/auth/interests`, {
              interests,
              id: id,
            })
            .then((res) => {
              getValueFor("token").then((token) => {
                if (token) {
                  dispatch(getMyInfo(token));
                }
              });
              dispatch({ type: INIT_CONTETNS });
              dispatch({ type: LOADING_END });
              setVisible(false);
              setIcon("");
            });
        }
      } else if (type === "qualifies") {
        const qualifies = {
          icon,
          contents,
        };
        if (userInfo.qualifies[currentPopUp.index]) {
          const qualifiesArray = userInfo?.interests.map((item, i) =>
            i === currentPopUp.index ? qualifies : item
          );
          const updatedUser = { ...userInfo, qualifies: qualifiesArray };
          updateUser(updatedUser);
        } else {
          await axios
            .post(`${API}/auth/qualifies`, {
              qualifies,
              id: id,
            })
            .then((res) => {
              getValueFor("token").then((token) => {
                if (token) {
                  dispatch(getMyInfo(token));
                }
              });
              dispatch({ type: INIT_CONTETNS });
              dispatch({ type: LOADING_END });
              setVisible(false);
              setIcon("");
            });
        }
      } else if (type === "majors") {
        const majors = {
          icon,
          contents,
        };
        if (userInfo.majors[currentPopUp.index]) {
          const majorsArray = userInfo?.majors.map((item, i) =>
            i === currentPopUp.index ? majors : item
          );
          const updatedUser = { ...userInfo, majors: majorsArray };
          updateUser(updatedUser);
        } else {
          await axios
            .post(`${API}/auth/majors`, {
              majors,
              id: id,
            })
            .then((res) => {
              getValueFor("token").then((token) => {
                if (token) {
                  dispatch(getMyInfo(token));
                }
              });
              dispatch({ type: INIT_CONTETNS });
              dispatch({ type: LOADING_END });
              setVisible(false);
              setIcon("");
            });
        }
      } else {
        const stories = {
          title: currentPopUp?.title || "Story",
          storyImage: currentPopUp?.storyImage,
          contents,
        };
        if (userInfo.stories[currentPopUp.index]) {
          const storiesArray = userInfo?.stories.map((item, i) =>
            i === currentPopUp.index ? stories : item
          );
          const updatedUser = { ...userInfo, stories: storiesArray };
          updateUser(updatedUser);
        } else {
          await axios
            .post(`${API}/auth/stories`, {
              stories,
              id: id,
            })
            .then((res) => {
              getValueFor("token").then((token) => {
                if (token) {
                  dispatch(getMyInfo(token));
                }
              });
              dispatch({ type: INIT_CONTETNS });
              dispatch({ type: LOADING_END });
              setVisible(false);
              setIcon("");
            });
        }
      }
    } else {
      getValueFor("token").then((token) => {
        if (token) {
          dispatch(getMyInfo(token));
        }
      });
      dispatch({ type: LOADING_END });
      dispatch({ type: INIT_CONTETNS });
      setVisible(false);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  return (
    <>
      {visible && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ ...styles.rootContainer, top: y ? 0 : 0 }}
        >
          <LinearGradient
            colors={["rgba(234, 240, 255, 0.9)", "rgba(234, 240, 255, 0.7)"]}
            style={styles.innerContainer}
          >
            <View style={styles.top}>
              <TouchableOpacity
                onPress={() => {
                  if (contents && !modifyMode) {
                    uploadContent(currentPopUp.type, contents, userInfo._id);
                  } else {
                    setVisible(false);
                    dispatch({ type: INIT_CONTETNS });
                  }
                }}
              >
                <WithLocalSvg fill={"#ffffff"} asset={BackButtonImg} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModifyMode(!modifyMode)}>
                <WithLocalSvg fill={"#ffffff"} asset={ModifyButtonImg} />
              </TouchableOpacity>
            </View>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
              style={{ width: "100%" }}
            >
              {isStory ? (
                <>
                  <View style={styles.storyTop}>
                    {currentPopUp?.storyImage ? (
                      <>
                        {modifyMode ? (
                          <Image
                            style={styles.storyGallery2}
                            source={{
                              uri: `data:image/png;base64, ${currentPopUp.storyImage}`,
                            }}
                          />
                        ) : (
                          <TouchableOpacity onPress={pickImage}>
                            <Image
                              style={styles.storyGallery2}
                              source={{
                                uri: `data:image/png;base64, ${currentPopUp.storyImage}`,
                              }}
                            />
                          </TouchableOpacity>
                        )}
                      </>
                    ) : (
                      <>
                        {modifyMode ? (
                          <View style={styles.storyGallery}>
                            <WithLocalSvg fill={"#ffffff"} asset={gallery} />
                          </View>
                        ) : (
                          <TouchableOpacity onPress={pickImage}>
                            <View style={styles.storyGallery}>
                              <WithLocalSvg fill={"#ffffff"} asset={gallery} />
                            </View>
                          </TouchableOpacity>
                        )}
                      </>
                    )}
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      {modifyMode ? (
                        <>
                          <Text style={styles.storyTitle}>
                            {currentPopUp?.title || "STORY TITLE"}
                          </Text>
                          <View style={styles.dateButton}>
                            <Text style={styles.dateText}>
                              ENTER DATE
                              {/* {date === new Date()
                              ? "ENTER DATE"
                              : `${date.getFullYear()}.${
                                date.getMonth() + 1
                              }.${date.getDate()}`} */}
                            </Text>
                          </View>
                        </>
                      ) : (
                        <>
                          <TextInput
                            style={styles.storyTitle}
                            placeholder="STORY TITLE"
                            placeholderTextColor="black"
                            value={currentPopUp?.title}
                            onChange={(e) =>
                              dispatch({
                                type: SET_CURRENT,
                                payload: {
                                  ...currentPopUp,
                                  title: e.nativeEvent.text,
                                },
                              })
                            }
                          />
                          <TouchableOpacity>
                            <View style={styles.dateButton}>
                              <Text style={styles.dateText}>
                                ENTER DATE
                                {/* {date === new Date()
                              ? "ENTER DATE"
                              : `${date.getFullYear()}.${
                                date.getMonth() + 1
                              }.${date.getDate()}`} */}
                              </Text>
                            </View>
                          </TouchableOpacity>
                          {/* <View
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <DatePicker date={date} setDate={setDate} />
                          </View> */}
                        </>
                      )}
                      {/* {show && (
                        <DateTimePicker
                          placeholderText="ENTER DATE"
                          mode="date"
                          format="DD-MM-YYYY"
                          value={date}
                          onChange={onChange}
                        />
                      )} */}
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.top2}>
                    {modifyMode ? (
                      <View style={styles.iconContainer}>
                        {icon ? (
                          <Image
                            source={getPng(icon)}
                            width={60}
                            height={60}
                            style={{ width: 40, height: 40 }}
                          />
                        ) : (
                          <WithLocalSvg width={60} height={60} asset={emma} />
                        )}
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setIconVisible(!iconVisible)}
                      >
                        <View style={styles.iconContainer}>
                          {icon ? (
                            <Image
                              source={getPng(icon)}
                              width={60}
                              height={60}
                              style={{ width: 40, height: 40 }}
                            />
                          ) : (
                            <WithLocalSvg width={60} height={60} asset={emma} />
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    <View style={styles.rightContainer}>
                      <View style={styles.contentTypeContainer}>
                        <Text style={{ fontWeight: "700" }}>
                          {currentPopUp?.type === "interests"
                            ? "관심직무"
                            : currentPopUp?.type === "qualifies"
                            ? "자격사항"
                            : "전공"}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontWeight: "700", fontSize: 28 }}>
                          {icon ? icon.slice(0, 4) : "ICON"}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontWeight: "700", fontSize: 28 }}>
                          {icon ? icon.length > 4 && icon.slice(4) : "NAME"}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {iconVisible && (
                    <IconSelector
                      setIcon={setIcon}
                      setVisible={setIconVisible}
                    />
                  )}
                </>
              )}
              {!modifyMode ? (
                <TextEditor
                  currentInput={currentInput}
                  setCurrentInput={setCurrentInput}
                />
              ) : (
                <TextViewer
                  currentInput={currentInput}
                  setCurrentInput={setCurrentInput}
                />
              )}
            </ScrollView>
            <View style={styles.bottom}>
              <TouchableOpacity
                onPress={() =>
                  dispatch({
                    type: SET_CONTENTS,
                    payload: contents.map((con, i) =>
                      i === currentInput && con.type !== "bold"
                        ? { ...con, type: "bold" }
                        : i === currentInput && con.type === "bold"
                        ? { ...con, type: "normal" }
                        : con
                    ),
                  })
                }
              >
                <Image source={BoldIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  dispatch({
                    type: SET_CONTENTS,
                    payload: contents.map((con, i) =>
                      i === currentInput && con.type !== "italic"
                        ? { ...con, type: "italic" }
                        : i === currentInput && con.type === "italic"
                        ? { ...con, type: "normal" }
                        : con
                    ),
                  })
                }
              >
                <Image source={ItalicIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  dispatch({
                    type: SET_CONTENTS,
                    payload: contents.map((con, i) =>
                      i === currentInput && con.type !== "underline"
                        ? { ...con, type: "underline" }
                        : i === currentInput && con.type === "underline"
                        ? { ...con, type: "normal" }
                        : con
                    ),
                  })
                }
              >
                <Image source={UnderlineIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  dispatch({
                    type: SET_CONTENTS,
                    payload: contents.map((con, i) =>
                      i === currentInput && con.type !== "lineThrough"
                        ? { ...con, type: "lineThrough" }
                        : i === currentInput && con.type === "lineThrough"
                        ? { ...con, type: "normal" }
                        : con
                    ),
                  })
                }
              >
                <Image source={StrikeThrough} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: SET_CONTENTS,
                    payload: [...contents, { type: "normal", text: "" }],
                  });
                }}
              >
                <Image source={LineBreak} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  rootContainer: {
    position: "absolute",
    width: "100%",
    height: vh(100),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  innerContainer: {
    width: "95%",
    height: "95%",
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: 11,
  },
  top: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    width: "70%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 10,
    alignSelf: "center",
  },
  top2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 12,
  },
  datePicker: {
    backgroundColor: "#9CB7FF",
    display: "flex",
    height: 30,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderRadius: 50,
    marginVertical: 12,
  },
  datePick: {
    height: 20,
    width: 150,
    padding: 0,
    fontSize: 10,
    color: "white",
  },
  iconContainer: {
    width: 118,
    height: 118,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTypeContainer: {
    width: 68,
    backgroundColor: "#C8D7FF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    marginBottom: 8,
  },
  rightContainer: {
    padding: 12,
    marginLeft: 12,
  },
  storyTop: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  storyGallery: {
    width: 230,
    height: 230,
    borderRadius: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  storyTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
  },
  dateButton: {
    backgroundColor: "#9CB7FF",
    display: "flex",
    width: 150,
    alignItems: "center",
    padding: 2,
    borderRadius: 20,
    marginVertical: 12,
  },
  dateText: {
    color: "white",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  storyGallery2: {
    width: 230,
    height: 230,
    borderRadius: 50,
    resizeMode: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
