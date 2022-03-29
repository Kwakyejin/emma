import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { any } from "react-native/Libraries/Text/TextNativeComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "../../actions/UserActions";
import Background from "../../components/Background";
import Loading from "../../components/Loading";
import MyButton from "../../components/MyButton";
import ProgressBar from "../../components/ProgressBar";
import { getValueFor } from "../../functions/SecureStoreFunctions";
import { API } from "../../lib/API";
import { LOADING_END, LOADING_START } from "../../reducers/loading";
import EachLink from "./EachLink";
import LinkButton from "./LinkButton";
import LinkInput from "./LinkInput";
import LinkPopUp from "./LinkPopUp";
import StepTitle from "./StepTitle";

function SnsModifyScreen({ navigation }) {
  const [snsLinks, setSnsLinks] = useState([]);
  const [snsObject, setSnsObject] = useState({ type: any, link: String });
  const [currentStep, setCurrentStep] = useState(0);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setSnsLinks(userInfo.snsLinks);
  }, [userInfo]);

  const pushToLinks = () => {
    if (currentStep === 2 && snsObject.type && snsObject.link) {
      setSnsLinks([...snsLinks, snsObject]);
      setCurrentStep(0);
      setSnsObject({ type: "", link: "" });
    } else if (currentStep === 2 && snsObject.link === "") {
      Alert.alert("경고", "링크를 입력해주세요");
    }
  };

  const goNext = async () => {
    console.log(snsLinks);
    if (snsLinks.length > 0) {
      dispatch({ type: LOADING_START });
      const updatedUser = { ...userInfo, snsLinks };
      try {
        await axios
          .put(`${API}/auth/user`, { updatedUser: updatedUser })
          .then((res) => {
            dispatch({ type: LOADING_END });
            if (res.data.status === "success") {
              getValueFor("token").then((token) => {
                if (token) {
                  dispatch(getMyInfo(token));
                }
              });
              navigation.goBack();
            } else {
              Alert.alert(
                "경고",
                typeof response.data.error === "string"
                  ? response.data.error
                  : "예기치 못한 오류가 발생했습니다."
              );
            }
          });
      } catch (error) {
        dispatch({ type: LOADING_END });
        Alert.alert("경고", "예기치 못한 오류가 발생했습니다.");
        console.log(error);
      }
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <Background>
        <TouchableWithoutFeedback onPress={pushToLinks}>
          <View style={styles.container}>
            <View>
              <StepTitle stepNum={3} />
            </View>
            <View style={styles.body}>
              {currentStep === 0 ? (
                <>
                  {snsLinks.map((object, i) => (
                    <EachLink key={i} type={object.type} link={object.link} />
                  ))}
                  <LinkButton onPress={() => setCurrentStep(1)} />
                  {snsLinks.length === 0 ? (
                    <>
                      <Text
                        style={{
                          marginTop: 30,
                          fontWeight: "600",
                          color: "#5C5C5C",
                        }}
                      >
                        당신을 더 알고 싶어요!
                      </Text>
                      <Text style={{ fontWeight: "600", color: "#5C5C5C" }}>
                        당신을 더 자세히 알릴 수 있는 웹사이트나
                      </Text>
                      <Text style={{ fontWeight: "600", color: "#5C5C5C" }}>
                        SNS계정이 있으신가요?
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text
                        style={{
                          marginTop: 30,
                          fontWeight: "600",
                          color: "#5C5C5C",
                        }}
                      >
                        메인 프로필에 표시되는 SNS 링크입니다!
                      </Text>
                    </>
                  )}
                </>
              ) : currentStep === 1 ? (
                <>
                  <LinkPopUp
                    snsLinks={snsLinks}
                    setSnsLinks={setSnsLinks}
                    snsObject={snsObject}
                    setSnsObject={setSnsObject}
                    setCurrentStep={setCurrentStep}
                  />
                </>
              ) : currentStep === 2 ? (
                <>
                  <LinkInput
                    snsObject={snsObject}
                    setSnsObject={setSnsObject}
                  />
                  <Text
                    style={{
                      marginTop: 100,
                      fontWeight: "600",
                      color: "#5C5C5C",
                    }}
                  >
                    외부를 탭하여 저장하세요.
                  </Text>
                </>
              ) : (
                <></>
              )}
            </View>
            <View style={styles.bottom}>
              <MyButton text="완료" onPress={goNext} />
              <View
                style={{
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
                    취소
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Background>
    </>
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
    marginTop: 10,
    padding: 5,
    height: 50,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 30,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
});

export default SnsModifyScreen;
