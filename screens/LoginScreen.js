import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import EmmaLogo from "../assets/emma-logo.svg";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import KakaoIcon from "../assets/KAKAO.svg";
import NaverIcon from "../assets/NAVER.svg";
import Input from "../components/Input";
import MyButton from "../components/MyButton";
import { getValueFor, save } from "../functions/SecureStoreFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "../actions/UserActions";
import axios from "axios";
import { API } from "../lib/API";
import { red } from "../lib/colors";
import Loading from "../components/Loading";
import { LOADING_END, LOADING_START } from "../reducers/loading";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getValueFor("token").then((token) => {
      if (token) {
        dispatch(getMyInfo(token));
      }
    });
  }, []);

  const login = async () => {
    dispatch({ type: LOADING_START });
    await axios
      .post(`${API}/auth/login`, { email: username, password })
      .then((res) => {
        dispatch({ type: LOADING_END });
        if (res.data.status === "success") {
          save("token", res.data.token);
          dispatch(getMyInfo(res.data.token));
        } else {
          setErrorMessage("회원정보가 일치하지 않습니다.");
        }
      });
  };

  const googleLogin = async () => {};

  const whereToGo = () => {
    if (
      userInfo !== "not-yet" &&
      userInfo !== false &&
      userInfo.isVerified &&
      !userInfo.selfIntroduction
    ) {
      navigation.navigate("welcomeScreen");
    } else if (
      userInfo !== "not-yet" &&
      userInfo !== false &&
      !userInfo.isVerified
    ) {
      navigation.navigate("verifyEmailScreen");
    } else if (
      userInfo !== "not-yet" &&
      userInfo.isVerified &&
      userInfo.selfIntroduction
    ) {
      navigation.navigate("mainScreen");
    }
  };

  useEffect(() => {
    whereToGo();
  }, [userInfo]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.rootContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ width: "100%" }}>
            <ImageBackground
              source={require("../assets/background.png")}
              style={style.bgImage}
            >
              <View style={style.logo}>
                <WithLocalSvg
                  width={"100%"}
                  fill={"#000000"}
                  asset={EmmaLogo}
                />
              </View>
              <View style={style.bottom}>
                <Text style={{ marginBottom: 20, color: red, fontSize: 12 }}>
                  {errorMessage}
                </Text>
                <Input
                  placeholder="USERNAME"
                  isSecure={false}
                  value={username}
                  blue="sky"
                  setValue={setUsername}
                  returnKeyType="next"
                />
                <Input
                  placeholder="PASSWORD"
                  isSecure={true}
                  value={password}
                  blue="sky"
                  setValue={setPassword}
                  returnKeyType="go"
                />
                <MyButton text="LOGIN" onPress={login} />
                <View style={style.linksContainer}>
                  <View style={style.link}>
                    <Text style={style.smallText}>비밀번호를 잊으셨나요?</Text>
                    <TouchableOpacity>
                      <Text style={style.linkText}>find it</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.link}>
                    <Text style={style.smallText}>계정이 없으신가요?</Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("signinScreen");
                      }}
                    >
                      <Text style={style.linkText}>sign in</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.socialLinks}>
                    <TouchableOpacity
                      onPress={() => Alert.alert("준비중입니다.")}
                    >
                      <WithLocalSvg fill={"#000000"} asset={GoogleIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Alert.alert("준비중입니다.")}
                    >
                      <WithLocalSvg fill={"#000000"} asset={FacebookIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Alert.alert("준비중입니다.")}
                    >
                      <WithLocalSvg fill={"#000000"} asset={KakaoIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Alert.alert("준비중입니다.")}
                    >
                      <WithLocalSvg fill={"#000000"} asset={NaverIcon} />
                    </TouchableOpacity>
                  </View>
                  <Text style={style.smallText}>SNS 계정으로 로그인하기</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  bgImage: { width: "100%", height: "100%", zIndex: -1000 },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "48%",
  },
  bottom: {
    display: "flex",
    width: "100%",
    height: "52%",
    alignItems: "center",
    justifyContent: "center",
  },
  smallText: {
    fontSize: 12,
    color: "#858585",
    fontWeight: "600",
  },
  linksContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  link: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    marginLeft: 2,
    fontSize: 12,
    color: "#7BA0FF",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  socialLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 16,
  },
});

export default LoginScreen;
