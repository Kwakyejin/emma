import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import IntroductionCard from "./IntroductionCard";
import { useDispatch, useSelector } from "react-redux";
import { SET_CONTENTS } from "../reducers/contents";
import { SET_CURRENT } from "../reducers/currentPopUp";
import MiniCard from "./MiniCard";
function MyButton3({ text, onPress }) {
  return (
    <View style={styles3.myButton}>
      <Text style={{ color: "#5C5C5C", fontWeight: "600", fontSize: 11 }}>
        {text}
      </Text>
    </View>
  );
}

const Card = ({ type, setVisible, left, index, setModifyMode, modifyMode }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const toRenderArray =
    type === "interests"
      ? userInfo?.interests
      : type === "qualifies"
      ? userInfo?.qualifies
      : userInfo?.majors;
  return (
    <>
      {type === "interests" ? (
        userInfo?.interests.length > 0 ? (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MyButton3 text={"관심직무"}></MyButton3>
            <IntroductionCard
              buttonClick={() => {
                setVisible(true);
                dispatch({
                  type: SET_CURRENT,
                  icon: toRenderArray?.length > 0 && toRenderArray[0].icon,
                  payload: { type: "interests", index: 0 },
                });
                if (toRenderArray) {
                  dispatch({
                    type: SET_CONTENTS,
                    payload: toRenderArray[0].contents,
                  });
                }
              }}
              icon={toRenderArray?.length > 0 && toRenderArray[0].icon}
              left={left}
              title={toRenderArray?.length > 0 && toRenderArray[0].icon}
            >
              {toRenderArray[1] && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  icon={toRenderArray[1].icon}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "interests",
                        index: 1,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray[1].contents,
                    });
                  }}
                />
              )}
              {toRenderArray[2] && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  icon={toRenderArray[2].icon}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "interests",
                        index: 1,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray[2].contents,
                    });
                  }}
                />
              )}
              {toRenderArray.length < 3 && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  plus={true}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "interests",
                        index: toRenderArray.length,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray,
                    });
                    setModifyMode(false);
                  }}
                />
              )}
            </IntroductionCard>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              dispatch({
                type: SET_CURRENT,
                payload: { type: "interests", index: 0 },
              });
              setModifyMode(false);
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <MyButton3 text={"관심직무"}></MyButton3>
              <IntroductionCard left={left}>
                <Text style={styles3.tab}>탭하여 팝업 열기</Text>
              </IntroductionCard>
            </View>
          </TouchableOpacity>
        )
      ) : type === "qualifies" ? (
        userInfo?.qualifies.length > 0 ? (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MyButton3 text={"자격사항"}></MyButton3>
            <IntroductionCard
              buttonClick={() => {
                setVisible(true);
                dispatch({
                  type: SET_CURRENT,
                  payload: { type: "qualifies", index: 0 },
                });
                if (toRenderArray[0]) {
                  dispatch({
                    type: SET_CONTENTS,
                    payload: toRenderArray[0].contents,
                  });
                }
              }}
              icon={toRenderArray?.length > 0 && toRenderArray[0].icon}
              left={left}
              title={toRenderArray?.length > 0 && toRenderArray[0].icon}
            >
              {toRenderArray[1] && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  icon={toRenderArray[1].icon}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "qualifies",
                        index: 1,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray[1].contents,
                    });
                  }}
                />
              )}
              {toRenderArray[2] && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  icon={toRenderArray[2].icon}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "qualifies",
                        index: 1,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray[2].contents,
                    });
                  }}
                />
              )}
              {toRenderArray.length < 3 && (
                <MiniCard
                  setModifyMode={setModifyMode}
                  plus={true}
                  onPress={() => {
                    setVisible(true);
                    dispatch({
                      type: SET_CURRENT,
                      payload: {
                        type: "qualifies",
                        index: toRenderArray.length,
                      },
                    });
                    dispatch({
                      type: SET_CONTENTS,
                      payload: toRenderArray,
                    });
                    setModifyMode(false);
                  }}
                />
              )}
            </IntroductionCard>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              dispatch({
                type: SET_CURRENT,
                payload: { type: "qualifies", index: 0 },
              });
              setModifyMode(false);
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <MyButton3 text={"자격사항"}></MyButton3>
              <IntroductionCard left={left}>
                <Text style={styles32.tab}>탭하여 팝업 열기</Text>
              </IntroductionCard>
            </View>
          </TouchableOpacity>
        )
      ) : userInfo?.majors.length > 0 ? (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <MyButton3 text={"전공"}></MyButton3>
          <IntroductionCard
            buttonClick={() => {
              setVisible(true);
              dispatch({
                type: SET_CURRENT,
                payload: { type: "majors", index: 0 },
              });
              if (toRenderArray[0]) {
                dispatch({
                  type: SET_CONTENTS,
                  payload: toRenderArray[0].contents,
                });
              }
            }}
            icon={toRenderArray?.length > 0 && toRenderArray[0].icon}
            left={left}
          >
            <Text style={styles32.tabText}>{userInfo?.majors[0].icon}</Text>
          </IntroductionCard>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
            dispatch({
              type: SET_CURRENT,
              payload: { type: "majors", index: 0 },
            });
            setModifyMode(false);
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MyButton3 text={"전공"}></MyButton3>
            <IntroductionCard left={left}>
              <Text style={styles32.tab}>탭하여 팝업 열기</Text>
            </IntroductionCard>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({});

const styles3 = StyleSheet.create({
  myButton: {
    position: "relative",
    zIndex: 2,
    top: 9,
    height: 18,
    width: 68,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 11,
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    width: "100%",

    flex: 1,
  },

  introduction: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "2%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  tab: {
    color: "#C8D7FF",
    fontSize: 9,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
  story: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "2%",
  },
});

const styles32 = StyleSheet.create({
  myButton: {
    position: "relative",
    zIndex: 2,
    top: 9,
    height: 18,
    width: 68,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 11,
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    width: "100%",

    flex: 1,
  },

  introduction: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#C8D7FF",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "2%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  tab: {
    color: "#C8D7FF",
    fontSize: 9,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },

  story: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "2%",
  },
  tabText: {
    color: "black",
    fontSize: 15,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
});
