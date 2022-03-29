import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WithLocalSvg } from "react-native-svg";
import BackButtonImg from "../assets/BackButton.svg";

import { vh } from "react-native-expo-viewport-units";
import { TouchableOpacity } from "react-native";
import TextEditor from "./TextEditor/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import ProfilePic from "../assets/profilePic.svg";
import MyButton from "../components/Mybutton2";
import PopUpPassword from "./PopUpPassword";
import { getValueFor } from "../functions/SecureStoreFunctions";
import { getMyInfo } from "../actions/UserActions";
import axios from "axios";
import { API } from "../lib/API";
import { LOADING_END, LOADING_START } from "../reducers/loading";

const PopUpEdit = ({ visible, backButtonPress, y, navigation, setVisible }) => {
  const userInfo = useSelector((state) => state.user);
  const [visible2, setVisible2] = useState(false);
  const [y2, setY2] = useState(0);
  const [name, setName] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setImage(userInfo?.photoURL);
    setName(userInfo?.name);
    setSelfIntroduction(userInfo?.selfIntroduction);
  }, [userInfo]);

  const updateUser = async () => {
    const updatedUser = {
      ...userInfo,
      selfIntroduction,
      name,
      photoURL: image,
    };
    if (updatedUser !== userInfo) {
      dispatch({ type: LOADING_START });
      await axios.put(`${API}/auth/user`, { updatedUser }).then((res) => {
        dispatch({ type: LOADING_END });
        if (res.data.status === "success") {
          getValueFor("token").then((token) => {
            if (token) {
              dispatch(getMyInfo(token));
            }
          });
          setVisible(false);
        } else {
          Alert.alert(
            "경고",
            typeof response.data.error === "string"
              ? response.data.error
              : "예기치 못한 오류가 발생했습니다."
          );
          setVisible(false);
        }
      });
    } else {
      setVisible(false);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
    });
    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  return (
    visible && (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ ...styles.rootContainer, top: y ? y : 0 }}
      >
        <PopUpPassword
          visible={visible2}
          y={y2}
          setVisible={setVisible2}
          backButtonPress={() => setVisible2(false)}
        />
        <LinearGradient
          colors={["rgba(234, 240, 255, 0.9)", "rgba(234, 240, 255, 0.9)"]}
          style={styles.innerContainer}
        >
          <View style={styles.top}>
            <TouchableOpacity onPress={updateUser}>
              <WithLocalSvg fill={"#ffffff"} asset={BackButtonImg} />
            </TouchableOpacity>
          </View>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            style={{ width: "100%" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              {image ? (
                <>
                  <TouchableOpacity onPress={pickImage}>
                    <Image
                      style={{
                        width: 204,
                        height: 204,
                        resizeMode: "cover",
                        borderWidth: 0,
                        borderRadius: 204,
                      }}
                      source={{
                        uri: `data:image/png;base64, ${image}`,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                      marginTop: "5%",
                      color: "#5C5C5C",
                    }}
                  >
                    프로필 사진
                  </Text>
                </>
              ) : (
                <>
                  <TouchableOpacity onPress={pickImage}>
                    <WithLocalSvg
                      width={204}
                      height={204}
                      borderRadius={204}
                      fill={"#000000"}
                      asset={ProfilePic}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                      marginTop: "5%",
                      color: "#5C5C5C",
                    }}
                  >
                    프로필 사진
                  </Text>
                </>
              )}
              <TextInput
                value={name}
                onChangeText={setName}
                multiline
                style={styles.input}
                maxLength={15}
              />
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 12,
                  marginTop: "5%",
                  color: "#5C5C5C",
                }}
              >
                프로필 이름 {name.length}/15
              </Text>
              <TextInput
                value={selfIntroduction}
                onChangeText={setSelfIntroduction}
                multiline
                style={styles.input2}
                maxLength={60}
              />
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 12,
                  marginTop: "5%",
                  color: "#5C5C5C",
                }}
              >
                자기소개글 {selfIntroduction.length}/60
              </Text>
              <View style={{ marginTop: "10%" }}>
                <MyButton
                  text="SNS 연결하기"
                  onPress={() => {
                    navigation.navigate("snsModifyScreen");
                  }}
                />
              </View>
              <View style={{ margin: "2%" }}>
                <MyButton
                  text="비밀번호 변경하기"
                  onPress={() => {
                    setVisible2(true);
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  );
};

export default PopUpEdit;

const styles = StyleSheet.create({
  rootContainer: {
    position: "absolute",
    width: "100%",
    height: vh(100),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  innerContainer: {
    width: "95%",
    height: "95%",
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: 11,
  },
  top: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    width: "70%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 10,
    alignSelf: "center",
  },
  top2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 12,
  },
  iconContainer: {
    width: 118,
    height: 118,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTypeContainer: {
    width: 68,
    backgroundColor: "#C8D7FF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    marginBottom: 12,
  },
  rightContainer: {
    padding: 12,
    marginLeft: 12,
  },
  input: {
    marginTop: "7%",
    paddingTop: 10,
    padding: 20,
    height: 45,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 32,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
  input2: {
    marginTop: "7%",
    paddingTop: 10,
    padding: 20,
    height: 118,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 32,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C8D7FF",
  },
});
