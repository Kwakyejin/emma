import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";
import EmmaShape from "../assets/EmmaShape.png";

const Loading = () => {
  let rotateValue = new Animated.Value(0);

  const startImageRotate = () => {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotate());
  };

  const rotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    startImageRotate();
  });
  const visible = useSelector((state) => state.loading);
  return (
    <>
      {visible && (
        <View style={styles.container}>
          <View>
            <Animated.Image
              style={{
                width: 60,
                height: 60,
                transform: [{ rotate: rotateData }],
              }}
              source={EmmaShape}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.15)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
