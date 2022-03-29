import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

function Background({ children }) {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.bgImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default Background;
