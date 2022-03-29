import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({
  placeholder,
  isSecure,
  value,
  setValue,
  blue,
  returnKeyType,
  onKeyPress,
}) => {
  return (
    <TextInput
      style={
        blue === "sky"
          ? styles.inputSkyBlue
          : blue
          ? styles.inputBlue
          : styles.inputWhite
      }
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={blue ? "white" : "#c4c4c4"}
      textAlign="center"
      secureTextEntry={isSecure}
      autoCapitalize="none"
      value={value}
      returnKeyType={returnKeyType}
      onKeyPress={onKeyPress}
    />
  );
};

const styles = StyleSheet.create({
  inputBlue: {
    height: 45,
    width: 250,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#7BA0FF",
    alignSelf: "center",
  },
  inputWhite: {
    height: 45,
    width: 250,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "black",
    backgroundColor: "white",
    alignSelf: "center",
  },
  inputSkyBlue: {
    height: 45,
    width: 250,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    alignSelf: "center",
    backgroundColor: "#C8D7FF",
  },
});

export default Input;
