import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { getIcon } from "../../functions/getIcon";
import { getPng } from "./LinkInput";

const EachLink = ({ type, link }) => {
  return (
    <View style={styles.link}>
      <Text>
        {type === "instagram" || type === "linkedin" ? (
          <WithLocalSvg
            width={30}
            height={30}
            fill={"#000000"}
            asset={getIcon(type)}
            style={styles.icon}
          />
        ) : (
          <Image source={getPng(type)} style={styles.icon} />
        )}
      </Text>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "700",
          fontSize: 16,
        }}
      >
        {link}
      </Text>
    </View>
  );
};

export default EachLink;

const styles = StyleSheet.create({
  link: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: 250,
    backgroundColor: "#ffffff",
    height: 45,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
