import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import Background from "../../components/Background";
import MyButton from "../../components/MyButton";
import ProgressBar from "../../components/ProgressBar";
import StepTitle from "./StepTitle";
import ProfilePic from "../../assets/profilePic.svg";
import { WithLocalSvg } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import BigProfile from "../../components/BigProfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../lib/API";
import { LOADING_END, LOADING_START } from "../../reducers/loading";

function Step1Screen({ navigation }) {
  const [image, setImage] = useState(null);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("권한을 승인해주십시오.");
        }
      }
    })();
  }, []);

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

  const uploadImage = async () => {
    const updatedUser = { ...userInfo, photoURL: image };
    dispatch({ type: LOADING_START });
    try {
      await axios
        .put(`${API}/auth/user`, { updatedUser: updatedUser })
        .then((res) => {
          dispatch({ type: LOADING_END });
          if (res.data.status === "success") {
            navigation.navigate("step2Screen");
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
      Alert.alert("경고", "예기치 못한 오류가 발생했습니다.");
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <View>
          <StepTitle stepNum={1} />
        </View>
        <View style={styles.body}>
          {image ? (
            <TouchableOpacity
              style={{
                borderRadius: 125,
                borderTopWidth: 2,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#C8D7FF",
              }}
              onPress={pickImage}
            >
              <BigProfile uri={`data:image/png;base64, ${image}`} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderRadius: 125,
                borderTopWidth: 2,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#C8D7FF",
              }}
              onPress={pickImage}
            >
              <WithLocalSvg
                width={250}
                height={250}
                fill={"#000000"}
                asset={ProfilePic}
              />
            </TouchableOpacity>
          )}
          <Text style={{ marginTop: 30, fontWeight: "600", color: "#5C5C5C" }}>
            위 아이콘을 눌러 프로필 사진을 선택하세요
          </Text>
        </View>
        <View style={styles.bottom}>
          <MyButton text="다음으로" onPress={uploadImage} />
          <View style={{ height: 40 }} />
          <ProgressBar current={1} steps={4} />
        </View>
      </View>
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
});

export default Step1Screen;
