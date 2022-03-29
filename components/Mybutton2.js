import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Mybutton2({ text, onPress, disabled }) {
  return (
    <>
      {disabled ? (
        <View style={styles.myButton_disabled}>
          <Text style={{ color: "#5C5C5C", fontWeight: "700", fontSize: 12 }}>
            {text}
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.myButton}>
            <Text style={{ color: "#5C5C5C", fontWeight: "700", fontSize: 12 }}>
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
    width: 307,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  myButton_disabled: {
    height: 45,
    width: 307,
    marginBottom: 10,
    borderRadius: 70,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#9CB7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
