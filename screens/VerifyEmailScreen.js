import React, { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";
import ProgressBar from "../components/ProgressBar";
import { blue, light_gray } from "../lib/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "../actions/UserActions";
import { getValueFor } from "../functions/SecureStoreFunctions";
import axios from "axios";
import { API } from "../lib/API";
import MyButton from "../components/MyButton";
import { LOADING_END, LOADING_START } from "../reducers/loading";

function VerifyEmailScreen({ navigation }) {
  const [verifyCode, setVerifyCode] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  const verifyEmail = async () => {
    dispatch({ type: LOADING_START });
    if (verifyCode === userInfo.verifyCode) {
      await axios
        .post(`${API}/auth/verify`, {
          email: userInfo.email,
          verifyCode,
        })
        .then((res) => {
          dispatch({ type: LOADING_END });
          if (res.data.status === "success") {
            getValueFor("token").then((token) => {
              dispatch(getMyInfo(token));
            });
            navigation.navigate("welcomeScreen");
          } else {
            Alert.alert("경고", "예기치 못한 오류가 발생했습니다.");
          }
        });
    } else {
      Alert.alert("경고", "인증코드가 맞지 않습니다.");
    }
  };

  const resendEmail = async () => {
    dispatch({ type: LOADING_START });

    await axios
      .get(`${API}/auth/verify?id=${userInfo._id}&email=${userInfo.email}`)
      .then((res) => {
        dispatch({ type: LOADING_END });

        if (res.data.status === "success") {
          setMessage("인증코드가 재전송되었습니다.");
          getValueFor("token").then((token) => {
            dispatch(getMyInfo(token));
          });
        }
      });
  };

  useEffect(() => {
    if (verifyCode !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [verifyCode]);

  return (
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
            <Text style={{ marginBottom: 10, fontWeight: "600", fontSize: 16 }}>
              메일로 전송된 인증코드 입력하기
            </Text>
            <Input blue={false} value={verifyCode} setValue={setVerifyCode} />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ color: light_gray }}>
                  인증코드가 오지 않았나요?
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity onPress={resendEmail}>
                  <Text
                    style={{
                      color: light_gray,
                      textDecorationLine: "underline",
                    }}
                  >
                    인증코드 재전송하기
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: light_gray }}> / </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("modifyEmailScreen")}
                >
                  <Text
                    style={{
                      color: light_gray,
                      textDecorationLine: "underline",
                    }}
                  >
                    이메일 주소 확인하기
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: blue }}>{message}</Text>
              </View>
            </View>
          </View>
          <View style={style.bottom}>
            <MyButton
              text="회원가입하기"
              onPress={verifyEmail}
              disabled={buttonDisabled}
            />
            <ProgressBar steps={2} current={2} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
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

export default VerifyEmailScreen;
