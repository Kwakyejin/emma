import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EmmaShape from "../../assets/emma-shape.svg";
import { WithLocalSvg } from "react-native-svg";

function StepTitle({ stepNum }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STEP</Text>
      <WithLocalSvg width={20} height={20} fill={"#000000"} asset={EmmaShape} />
      <Text style={styles.title}>{stepNum}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
  },
});

export default StepTitle;
