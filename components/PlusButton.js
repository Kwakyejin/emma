import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import EmmaShape2 from "../assets/EmmaShape2.svg";
import plus from "../assets/Vector.svg";
import { getIcon } from "../functions/getIcon";

export default function PlusButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.myButton}>
        <WithLocalSvg fill={"#ffffff"} asset={plus} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  myButton: {
    height: 43,
    width: "100%",
    borderRadius: 37,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});
