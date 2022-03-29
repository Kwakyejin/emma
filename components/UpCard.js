import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Share from "../assets/Share.svg";
import Union from "../assets/Union.svg";

const UpCard = ({ backButtonPress }) => {
  return (
    <View style={styles.top}>
      <TouchableOpacity onPress={backButtonPress}>
        <WithLocalSvg fill={"#ffffff"} asset={Share} />
      </TouchableOpacity>
      <Text>About Me</Text>
      <TouchableOpacity>
        <WithLocalSvg fill={"#ffffff"} asset={Union} />
      </TouchableOpacity>
    </View>
  );
};

export default UpCard;

const styles = StyleSheet.create({
  top: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "600",
    color: "#333333",
  },
});
