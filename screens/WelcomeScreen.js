import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MyButton from "../components/MyButton";
import { WithLocalSvg } from "react-native-svg";
import EmmaShape from "../assets/emma-shape.svg";
import { blue, gray } from "../lib/colors";
import { useSelector } from "react-redux";

function WelcomeScreen({ navigation }) {
  const userInfo = useSelector((state) => state.user);
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
          <View style={style.title}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "700",
                fontSize: 18,
              }}
            >
              환영합니다
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "700",
                fontSize: 50,
              }}
            >
              {userInfo?.name}님!
            </Text>
          </View>
          <View style={style.body}>
            <WithLocalSvg
              width={100}
              height={100}
              fill={"#000000"}
              asset={EmmaShape}
            />
            <View style={{ width: "100%", marginTop: 30 }}>
              <Text style={style.text}>안녕하세요,</Text>
              <Text style={style.text}>
                저는 자기소개 친구 <Text style={{ color: blue }}>EMMA</Text>
                입니다:)
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: gray,
                  marginTop: 10,
                }}
              >
                우리 함께 당신을 소개해볼까요?
              </Text>
            </View>
          </View>
          <View style={style.bottom}>
            <MyButton
              text="시작하기"
              onPress={() =>
                navigation.reset({ routes: [{ name: "loading" }] })
              }
            />
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
  title: {
    width: "100%",
    display: "flex",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: gray,
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
});

export default WelcomeScreen;
