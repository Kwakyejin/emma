import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import gallery from "../assets/Gallery.svg";
import { WithLocalSvg } from "react-native-svg";
import { useDispatch } from "react-redux";
import { SET_CONTENTS } from "../reducers/contents";
import { SET_CURRENT } from "../reducers/currentPopUp";

const StoryCard = ({ image, title, toRenderArray, setVisible, index }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        if (toRenderArray) {
          setVisible(true);
          dispatch({
            type: SET_CURRENT,
            payload: { type: "stories", title, storyImage: image, index },
          });
          dispatch({
            type: SET_CONTENTS,
            payload: toRenderArray,
          });
        }
      }}
    >
      <View style={styles.container}>
        {image ? (
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "cover",
              borderWidth: 0,
              borderRadius: 4,
            }}
            source={{
              uri: `data:image/png;base64, ${image}`,
            }}
          />
        ) : (
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "whitesmoke",
              borderWidth: 0,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WithLocalSvg
              width={30}
              height={30}
              fill={"#ffffff"}
              asset={gallery}
            />
          </View>
        )}
        <View style={styles.text}>
          <Text>{title}</Text>
          <Text style={styles.date}></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 12,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    height: "100%",
  },
  date: {
    color: "#5C5C5C",
    fontSize: 12,
  },
});
