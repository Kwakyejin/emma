import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import SquareButton from "./SquareButton";
import Emma from "../assets/EmmaShape2.svg";

const IntroductionCard = ({ children, left, buttonClick, icon, title }) => {
  return (
    <>
      {left ? (
        <View style={styles.myButton}>
          <View
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SquareButton onPress={buttonClick} icon={icon} />
            {title && (
              <Text style={{ marginTop: 2, fontWeight: "500", fontSize: 12 }}>
                {title}
              </Text>
            )}
          </View>
          <View
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {children}
          </View>
        </View>
      ) : (
        <View style={styles.myButton}>
          <View
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row-reverse",
            }}
          >
            {children}
          </View>
          <View
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SquareButton color={true} onPress={buttonClick} icon={icon} />
            {title && (
              <Text style={{ marginTop: 2, fontWeight: "500", fontSize: 12 }}>
                {title}
              </Text>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default IntroductionCard;

const styles = StyleSheet.create({
  myButton: {
    height: 120,
    width: 300,
    marginBottom: 10,
    borderRadius: 32,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
