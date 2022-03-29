import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WithLocalSvg } from "react-native-svg";
import EmmaShape2 from "../assets/EmmaShape2.svg";
import { getPng } from "../functions/getPng";

const MiniCard = ({ onPress, plus, icon, setModifyMode }) => {
  return plus ? (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <WithLocalSvg fill={"#ffffff"} asset={EmmaShape2} />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={getPng(icon)} />
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "rgba(234, 240, 255,60)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
