import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Background from "../../components/Background";
import MyButton from "../../components/MyButton";
import ProgressBar from "../../components/ProgressBar";
import StepTitle from "./StepTitle";
import EmmaShpae from "../../assets/emma-shape-secondary.svg";
import { WithLocalSvg } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../lib/API";
import { LOADING_END, LOADING_START } from "../../reducers/loading";

function Step2Screen({ navigation }) {
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  const updateUser = async () => {
    dispatch({ type: LOADING_START });
    if (selfIntroduction) {
      const updatedUser = { ...userInfo, selfIntroduction: selfIntroduction };
      await axios.put(`${API}/auth/user`, { updatedUser }).then((res) => {
        dispatch({ type: LOADING_END });
        if (res.data.status === "success") {
          navigation.navigate("step3Screen");
        } else {
          Alert.alert(
            "경고",
            typeof response.data.error === "string"
              ? response.data.error
              : "예기치 못한 오류가 발생했습니다."
          );
        }
      });
    } else {
      Alert.alert("경고", "짧은 자기소개를 입력해주세요!");
    }
  };
  return (
    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View>
            <StepTitle stepNum={2} />
          </View>
          <View style={styles.body}>
            <View
              style={{
                width: "100%",
                height: 150,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <WithLocalSvg asset={EmmaShpae} />
              <TextInput
                value={selfIntroduction}
                onChangeText={setSelfIntroduction}
                multiline
                style={styles.input}
                autoFocus
              />
            </View>
            <Text
              style={{ marginTop: 30, fontWeight: "600", color: "#5C5C5C" }}
            >
              짧은 자기소개를 적어주세요. 무엇을 좋아하시나요?
            </Text>
          </View>
          <View style={styles.bottom}>
            <MyButton text="다음으로" onPress={updateUser} />
            <View
              style={{
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    marginBottom: 10,
                    color: "#c4c4c4",
                    fontWeight: "600",
                  }}
                >
                  이전으로 돌아가기
                </Text>
              </TouchableOpacity>
            </View>
            <ProgressBar current={2} steps={4} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  title: {
    width: "100%",
    height: 100,
  },
  body: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    position: "absolute",
    top: 50,
    paddingTop: 10,
    padding: 20,
    height: 100,
    backgroundColor: "white",
    borderRadius: 30,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
});

export default Step2Screen;
