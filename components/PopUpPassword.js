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
import { INIT_CURRENT } from "../reducers/currentPopUp";
import { INIT_CONTETNS, SET_CONTENTS } from "../reducers/contents";
import WhiteEmma from "../assets/WhiteEmma.png";
import emma from "../assets/EmmaShape2.svg";
import ProfilePic from "../assets/profilePic.svg";
import MyButton from "../components/Mybutton2";
import Input from "../components/Input2";
import EmmaShape from "../assets/emma-shape.svg";
import { LOADING_END, LOADING_START } from "../reducers/loading";
import axios from "axios";
import { API } from "../lib/API";
import { getValueFor } from "../functions/SecureStoreFunctions";
import { getMyInfo } from "../actions/UserActions";

const PopUpPassword = ({
  visible,
  backButtonPress,
  setVisible,
  modifyButtonPress,
  children,
  y,
  navigation,
}) => {
  const userInfo = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const changePassword = async () => {
    if (password === "") {
      Alert.alert("경고", "비밀번호를 입력하세요");
    } else if (password !== confirm) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      dispatch({ type: LOADING_START });
      await axios
        .put(`${API}/auth/password`, {
          id: userInfo._id,
          password,
        })
        .then((response) => {
          dispatch({ type: LOADING_END });
          if (response.data.status === "success") {
            getValueFor("token").then((token) => {
              if (token) {
                dispatch(getMyInfo(token));
              }
            });
            setVisible(false);
          } else {
            Alert.alert(
              "경고",
              typeof response.data.error === "string"
                ? response.data.error
                : "예기치 못한 오류가 발생했습니다."
            );
          }
        });
    }
  };
  return (
    visible && (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ ...styles.rootContainer, top: y ? y : 0 }}
      >
        <LinearGradient
          colors={["rgba(234, 240, 255, 0.9)", "rgba(234, 240, 255, 0.6)"]}
          style={styles.innerContainer}
        >
          <View style={styles.top}>
            <TouchableOpacity onPress={backButtonPress}>
              <WithLocalSvg fill={"#ffffff"} asset={BackButtonImg} />
            </TouchableOpacity>
          </View>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            style={{ width: "100%" }}
          >
            <View style={styles.content}>
              <Text
                style={{ color: "#7D7D7D", fontWeight: "700", fontSize: 12 }}
              >
                계정 이메일
              </Text>
              <Text
                style={{
                  marginTop: "3%",
                  color: "#333333",
                  fontSize: 24,
                  fontWeight: "700",
                }}
              >
                {userInfo?.email}
              </Text>
            </View>

            <Text
              style={{
                marginTop: "40%",
                fontWeight: "500",
                marginBottom: "3%",
              }}
            >
              비밀번호를 설정하세요
            </Text>
            <Input
              blue={false}
              isSecure={true}
              value={password}
              setValue={setPassword}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <WithLocalSvg
                width={10}
                height={10}
                fill={"#000000"}
                style={{ marginTop: 5 }}
                asset={EmmaShape}
              />
              <Text
                style={{
                  marginBottom: "3%",
                  marginLeft: "2%",
                  fontWeight: "500",
                  color: "#7D7D7D",
                }}
              >
                비밀번호 재확인
              </Text>
            </View>
            <Input
              blue={false}
              isSecure={true}
              value={confirm}
              setValue={setConfirm}
            />
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
              }}
            >
              <Text style={{ color: "#D45E7A", fontSize: 12 }}>
                {errorMessage}
              </Text>
              <View style={{ marginTop: "55%" }}>
                <MyButton
                  disabled={
                    password !== "" && password === confirm ? false : true
                  }
                  text={"비밀번호 변경하기"}
                  onPress={changePassword}
                />
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  );
};

export default PopUpPassword;

const styles = StyleSheet.create({
  rootContainer: {
    position: "absolute",
    width: "100%",
    height: vh(100),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 12,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 12,
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
    marginBottom: 12,
  },
  rightContainer: {
    padding: 12,
    marginLeft: 12,
  },
  input: {
    marginTop: "7%",
    paddingTop: 10,
    padding: 20,
    height: 45,
    width: 328,
    backgroundColor: "white",
    borderRadius: 32,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
  input2: {
    marginTop: "7%",
    paddingTop: 10,
    padding: 20,
    height: 118,
    width: 328,
    backgroundColor: "white",
    borderRadius: 32,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "28%",
  },
});
