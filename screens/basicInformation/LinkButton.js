import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LinkButton = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <View>
            <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 16 }}>
              +
            </Text>
          </View>
          <View>
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
              Link 추가하기
            </Text>
          </View>
          <View></View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 250,
    backgroundColor: "#C8D7FF",
    height: 45,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
