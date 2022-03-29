import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../assets/edit.svg";
import { WithLocalSvg } from "react-native-svg";
import { SET_CONTENTS } from "../../reducers/contents";

const TextViewer = ({ currentInput, setCurrentInput }) => {
  const [test, setTest] = useState("");
  const [contentObject, setContentObject] = useState({
    type: String,
    payload: String,
  });
  const contents = useSelector((state) => state.contents);
  const dispatch = useDispatch();

  return (
    <View>
      {contents?.length === 0 ? (
        <Text style={styles.inputButton}>텍스트가 없습니다.</Text>
      ) : (
        <>
          {contents?.map((content, i) => {
            switch (content.type) {
              case "normal":
                return (
                  <Text key={i} style={styles.input} multiline={false}>
                    {content.text}
                  </Text>
                );
              case "bold":
                return (
                  <Text key={i} style={styles.bold} multiline={false}>
                    {content.text}
                  </Text>
                );
              case "italic":
                return (
                  <Text key={i} style={styles.italic} multiline={false}>
                    {content.text}
                  </Text>
                );
              case "lineThrough":
                return (
                  <Text key={i} style={styles.lineThrough} multiline={false}>
                    {content.text}
                  </Text>
                );
              case "underline":
                return (
                  <Text key={i} style={styles.underline} multiline={false}>
                    {content.text}
                  </Text>
                );
              default:
                return (
                  <Text key={i} style={styles.input} multiline={false}>
                    {content.text}
                  </Text>
                );
            }
          })}
        </>
      )}
    </View>
  );
};

export default TextViewer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: 300,
    marginTop: 4,
    color: "#656464",
  },
  bold: {
    width: 300,
    marginTop: 4,
    fontWeight: "700",
    color: "#656464",
  },
  italic: {
    width: 300,
    marginTop: 4,
    fontStyle: "italic",
    color: "#656464",
  },
  underline: {
    width: 300,
    marginTop: 4,
    textDecorationLine: "underline",
    color: "#656464",
  },
  lineThrough: {
    width: 300,
    marginTop: 4,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#656464",
  },
  inputButton: {
    textDecorationLine: "underline",
    color: "#888888",
    fontWeight: "700",
    marginLeft: 5,
    fontSize: 24,
  },
});
