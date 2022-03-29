import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MyButton({ text, onPress, disabled }) {
  return (
    <>
      {disabled ? (
        <View style={styles.myButton_disabled}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
            {text}
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.myButton}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  myButton: {
    height: 45,
    width: 250,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#7BA0FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  myButton_disabled: {
    height: 45,
    width: 250,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyButton;
