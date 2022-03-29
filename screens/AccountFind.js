import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../lib/API";

function AccountFind({ navigation }) {
  const [email, setemail] = React.useState("");

  const AccountFind = async () => {
    if (email === userInfo.email) {
      await axios
        .post(`${API}/auth/verify`, {
          email: userInfo.email,
          verifyCode,
        })
        .then((res) => {
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

  const userInfo = useSelector((state) => state.user);

  return (
    <Background>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          height: "60%",
        }}
      >
        <Text
          style={{
            color: "#333333",
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          가입하신 계정의 이메일 주소를 입력해주세요
        </Text>

        <Input blue={false} value={email} setValue={setemail} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            width: "90%",
            height: "100%",
          }}
        >
          <MyButton text="입력완료" />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                marginTop: "3%",
                color: "#c4c4c4",
                fontWeight: "600",
              }}
            >
              이전으로 돌아가기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

export default AccountFind;

const styles = StyleSheet.create({});
