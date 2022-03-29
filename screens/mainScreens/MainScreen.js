import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "../../actions/UserActions";
import Background from "../../components/Background";
import IntroductionCard from "../../components/IntroductionCard";
import PopUp from "../../components/PopUp";
import TextEditor from "../../components/TextEditor/TextEditor";
import { getValueFor } from "../../functions/SecureStoreFunctions";

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
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles2 = StyleSheet.create({
  myButton: {
    height: 80,
    width: 80,
    marginBottom: 10,
    borderRadius: 20,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainScreen = ({ navigation }) => {
  const userInfo = useSelector((state) => state.user); //redux
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [interestIndex, setInterestIndex] = useState(0);
  const [qualificationIndex, setQualificationIndex] = useState(0);
  const [majorIndex, setMajorIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    getValueFor("token").then((token) => {
      if (token) {
        dispatch(getMyInfo(token));
      }
    });
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  function MyButton2({ text, onPress }) {
    return <View style={styles2.myButton}></View>;
  }
  function MyButton3({ text, onPress }) {
    return (
      <View style={styles3.myButton}>
        <Text style={{ color: "#5C5C5C", fontWeight: "600", fontSize: 11 }}>
          {text}
        </Text>
      </View>
    );
  }

  const styles3 = StyleSheet.create({
    myButton: {
      height: 28,
      width: 148,
      marginBottom: 10,
      borderRadius: 20,
      fontWeight: "600",
      color: "#5C5C5C",
      backgroundColor: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <Background>
      <PopUp
        visible={visible}
        setVisible={setVisible}
        backButtonPress={() => setVisible(false)}
      >
        <TextEditor />
      </PopUp>
      {/*
      <IntroductionCard
        onPress={() => console.log("hi")}
        buttonClick={() => setVisible(true)}
        left={true}
      >
        <Text>hello</Text>
      </IntroductionCard>
      
      <IntroductionCard onPress={() => console.log("hi")}>
        <Text>hello</Text>
      </IntroductionCard>*/}
      <MyButton2></MyButton2>
      <MyButton3 text={"asd"}></MyButton3>
      <View>
        <Text>{userInfo?.name}님 안녕하세요</Text>
      </View>
    </Background>
  );
};

export default MainScreen;
