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

function ModifyEmailScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  const changeEmail = async () => {
    dispatch({ type: LOADING_START });
    if (email !== "" && email !== userInfo.email) {
      const updatedUser = { ...userInfo, email };
      await axios
        .put(`${API}/auth/user`, {
          updatedUser,
        })
        .then(async (res) => {
          dispatch({ type: LOADING_END });
          if (res.data.status === "success") {
            await axios.get(
              `${API}/auth/verify?id=${userInfo._id}&email=${email}`
            );
            getValueFor("token").then((token) => {
              dispatch(getMyInfo(token));
            });
            navigation.goBack();
          } else {
            Alert.alert("경고", "예기치 못한 오류가 발생했습니다.");
          }
        });
    } else {
      navigation.goBack();
    }
  };

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
          <View
            style={{
              width: "100%",
              marginTop: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                fontWeight: "600",
                fontWeight: "600",
                fontSize: 13,
                color: "#858585",
              }}
            >
              계정 이메일
            </Text>
            <Text style={{ marginBottom: 10, fontWeight: "600", fontSize: 20 }}>
              {userInfo?.email}
            </Text>
            <Text
              style={{
                marginBottom: 10,
                marginTop: 60,
                fontWeight: "600",
                fontSize: 13,
                color: "#858585",
                width: "90%",
              }}
            >
              이메일 주소 수정하기
            </Text>
            <Input blue={false} value={email} setValue={setEmail} />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: blue }}>{message}</Text>
              </View>
            </View>
          </View>
          <View style={style.bottom}>
            <MyButton
              text="이메일 확인"
              onPress={changeEmail}
              disabled={false}
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

export default ModifyEmailScreen;
