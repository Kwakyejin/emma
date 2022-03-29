import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import EmmaShape2 from "../assets/EmmaShape2.svg";
import Kakao from "../assets/KAKAO.svg";
import { getIcon } from "../functions/getIcon";
import { getPng } from "../functions/getPng";

const SquareButton = ({ onPress, color, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={color ? styles.myButton : styles.lightColor}>
        {icon ? (
          <Image source={getPng(icon)} style={{ width: 30, height: 30 }} />
        ) : (
          <WithLocalSvg fill={"#ffffff"} asset={EmmaShape2} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  myButton: {
    height: 80,
    width: 80,

    borderRadius: 20,
    fontWeight: "600",
    color: "#9CB7FF",
    backgroundColor: "#9CB7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lightColor: {
    height: 80,
    width: 80,

    borderRadius: 20,
    fontWeight: "600",
    color: "#9CB7FF",
    backgroundColor: "#9CB7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

//C8D7FF
