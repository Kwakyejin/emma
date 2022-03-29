import React from "react";
import { StyleSheet, View } from "react-native";
import { blue } from "../lib/colors";

function ProgressBar({ steps, current }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 200 / steps,
          height: 10,
          backgroundColor: blue,
          borderRadius: 10,
          position: "absolute",
          top: 0,
          left: (current - 1) * (200 / steps),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 10,
    backgroundColor: "white",
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#EAF0FF",
  },
});

export default ProgressBar;
