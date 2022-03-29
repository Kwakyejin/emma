import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../components/Background";
import MyButton from "../components/MyButton";
import Input from "../components/Input";

const AccountFind2 = () => {
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
          <MyButton
            text="입력완료"
            onPress={() => navigation.navigate("accountfind2")}
          />
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
};

export default AccountFind2;

const styles = StyleSheet.create({});
