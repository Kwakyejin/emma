import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../assets/edit.svg";
import { WithLocalSvg } from "react-native-svg";
import { SET_CONTENTS } from "../../reducers/contents";

const TextEditor = ({ currentInput, setCurrentInput }) => {
  const [test, setTest] = useState("");
  const [contentObject, setContentObject] = useState({
    type: String,
    payload: String,
  });
  const contents = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const deleteOne = (index) => {
    const modifiedContents = contents;
    modifiedContents.splice(index, 1);
    return modifiedContents;
  };

  return (
    <View>
      {contents?.length === 0 ? (
        <TouchableOpacity
          style={{ display: "flex", flexDirection: "row" }}
          onPress={() =>
            dispatch({
              type: SET_CONTENTS,
              payload: [...contents, { type: "normal", text: "" }],
            })
          }
        >
          <WithLocalSvg fill={"#ffffff"} asset={edit} />
          <Text style={styles.inputButton}>텍스트 입력하기</Text>
        </TouchableOpacity>
      ) : (
        <>
          {contents?.map((content, i) => {
            switch (content.type) {
              case "normal":
                return (
                  <TextInput
                    autoCapitalize="none"
                    key={i}
                    style={styles.input}
                    multiline={false}
                    value={content.text}
                    onKeyPress={(e) => {
                      if (
                        e.nativeEvent.key === "Backspace" &&
                        content.text === ""
                      ) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      }
                    }}
                    onChange={(e) => {
                      dispatch({
                        type: SET_CONTENTS,
                        payload: contents.map((con, i) =>
                          i === currentInput
                            ? { ...con, text: e.nativeEvent.text }
                            : con
                        ),
                      });
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
              case "bold":
                return (
                  <TextInput
                    autoCapitalize="none"
                    key={i}
                    style={styles.bold}
                    multiline={false}
                    value={content.text}
                    onChange={(e) => {
                      if (e.nativeEvent.target === 1303) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      } else {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: contents.map((con, i) =>
                            i === currentInput
                              ? { ...con, text: e.nativeEvent.text }
                              : con
                          ),
                        });
                      }
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
              case "italic":
                return (
                  <TextInput
                    autoCapitalize="none"
                    key={i}
                    style={styles.italic}
                    multiline={false}
                    value={content.text}
                    onChange={(e) => {
                      if (e.nativeEvent.target === 1303) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      } else {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: contents.map((con, i) =>
                            i === currentInput
                              ? { ...con, text: e.nativeEvent.text }
                              : con
                          ),
                        });
                      }
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
              case "lineThrough":
                return (
                  <TextInput
                    autoCapitalize="none"
                    key={i}
                    style={styles.lineThrough}
                    multiline={false}
                    value={content.text}
                    onChange={(e) => {
                      if (e.nativeEvent.target === 1303) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      } else {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: contents.map((con, i) =>
                            i === currentInput
                              ? { ...con, text: e.nativeEvent.text }
                              : con
                          ),
                        });
                      }
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
              case "underline":
                return (
                  <TextInput
                    autoCapitalize="none"
                    key={i}
                    style={styles.underline}
                    multiline={false}
                    value={content.text}
                    onChange={(e) => {
                      if (e.nativeEvent.target === 1303) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      } else {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: contents.map((con, i) =>
                            i === currentInput
                              ? { ...con, text: e.nativeEvent.text }
                              : con
                          ),
                        });
                      }
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
              default:
                return (
                  <TextInput
                    autoCapitalize="none"
                    style={styles.input}
                    multiline={false}
                    value={content.text}
                    onChange={(e) => {
                      if (e.nativeEvent.target === 1303) {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: deleteOne(i),
                        });
                      } else {
                        dispatch({
                          type: SET_CONTENTS,
                          payload: contents.map((con, i) =>
                            i === currentInput
                              ? { ...con, text: e.nativeEvent.text }
                              : con
                          ),
                        });
                      }
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onFocus={() => setCurrentInput(i)}
                    onSubmitEditing={() =>
                      dispatch({
                        type: SET_CONTENTS,
                        payload: [...contents, { type: "normal", text: "" }],
                      })
                    }
                  />
                );
            }
          })}
        </>
      )}
    </View>
  );
};

export default TextEditor;

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
