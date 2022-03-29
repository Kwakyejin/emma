import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ssmallbutton() {
  return (
    <View style={styles.myButton}>
      <Text style={{ color: "#5C5C5C", fontWeight: "1000", fontSize: 11 }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  myButton: {
    height: 18,
    width: 68,
    marginBottom: 10,
    borderRadius: 20,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
