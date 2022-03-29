import React, { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import EmmaShape from "../assets/emma-shape.svg";
import Input from "../components/Input";
import ProgressBar from "../components/ProgressBar";
import { gray, red } from "../lib/colors";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { API } from "../lib/API";
import { getMyInfo } from "../actions/UserActions";
import { getValueFor, save } from "../functions/SecureStoreFunctions";
import { useDispatch } from "react-redux";
import MyButton from "../components/MyButton";
import Loading from "../components/Loading";
import { LOADING_END, LOADING_START } from "../reducers/loading";

function SigninScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [token, setToken] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  getValueFor("token").then((token) => {
    setToken(token);
  });

  const registerWithEmail = async () => {
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (name === "") {
      Alert.alert("경고", "이름을 입력하세요");
    } else if (email === "") {
      Alert.alert("경고", "이메일을 입력하세요");
    } else if (typeof email.match(emailReg) === null) {
      Alert.alert("경고", "이메일 형식이 올바르지 않습니다.");
    } else if (password === "") {
      Alert.alert("경고", "비밀번호를 입력하세요");
    } else if (password !== confirm) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      dispatch({ type: LOADING_START });
      await axios
        .post(`${API}/auth/register`, {
          userInfo: {
            name,
            email,
            password,
          },
        })
        .then((response) => {
          dispatch({ type: LOADING_END });
          if (response.data.status === "success") {
            const {
              data: { token },
            } = response;
            save("token", token);
            dispatch(getMyInfo(token));
            navigation.navigate("verifyEmailScreen");
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

  useEffect(() => {
    if (name !== "" && email !== "" && password !== "" && confirm !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, email, password, confirm]);

  return (
    <>
      <View style={style.rootContainer}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={style.bgImage}
        >
          <LinearGradient
            colors={["rgba(225, 233, 255, 0.2)", "transparent"]}
            style={style.innerContainer}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                1. 성함을 입력해주세요
              </Text>
              <Input blue={false} value={name} setValue={setName} />
              <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                2. 이메일을 입력해주세요
              </Text>
              <Input
                blue={false}
                value={email}
                placeholder="본인인증에 사용되는 메일입니다"
                setValue={setEmail}
              />
              <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                3. 비밀번호를 입력해주세요
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
                    marginBottom: 10,
                    marginLeft: 6,
                    fontWeight: "500",
                    color: gray,
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
                <Text style={{ color: red, fontSize: 12 }}>{errorMessage}</Text>
              </View>
            </View>
            <View style={style.bottom}>
              <MyButton
                text={token ? "확인완료" : "본인인증하기"}
                onPress={registerWithEmail}
                disabled={buttonDisabled}
              />
              <ProgressBar steps={2} current={1} />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
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
  bgImage: {
    width: "100%",
    height: "100%",
    zIndex: -1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
    height: "90%",
    padding: 40,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default SigninScreen;
