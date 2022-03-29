import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Background from "../../components/Background";
import MyButton from "../../components/MyButton";
import ProgressBar from "../../components/ProgressBar";
import StepTitle from "./StepTitle";
import EmmaShape from "../../assets/EmmaShape-eyes.svg";
import { WithLocalSvg } from "react-native-svg";
import { blue } from "../../lib/colors";

function Step4Screen({ navigation }) {
  const goToMainPage = () => {
    navigation.reset({ routes: [{ name: "mainScreen" }] });
  };

  return (
    <Background>
      <View style={styles.container}>
        <View>
          <StepTitle stepNum={4} />
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={{ paddingBottom: 50 }}
            onPress={goToMainPage}
          >
            <WithLocalSvg
              width={150}
              height={150}
              fill={"#000000"}
              asset={EmmaShape}
            />
          </TouchableOpacity>
          <Text style={{ marginTop: 30, fontWeight: "600", color: "#5C5C5C" }}>
            <Text style={{ color: blue }}>EMMA</Text>를 눌러 당신의 메인
            페이지를 편집하세요!
          </Text>
        </View>
        <View style={styles.bottom}>
          <MyButton text="완료하기" onPress={goToMainPage} />
          <View
            style={{
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  marginBottom: 10,
                  color: "#c4c4c4",
                  fontWeight: "600",
                }}
              >
                이전으로 돌아가기
              </Text>
            </TouchableOpacity>
          </View>
          <ProgressBar current={4} steps={4} />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  title: {
    width: "100%",
    height: 100,
  },
  body: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Step4Screen;
