import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Linking,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { getIcon } from "../../functions/getIcon";
import BlogIcon from "../../assets/SNS/blog.png";
import NotionIcon from "../../assets/SNS/notion.png";
import GithubIcon from "../../assets/SNS/GITHUB.png";
import BrunchIcon from "../../assets/SNS/brunch.png";
import { useSelector } from "react-redux";

const SNSPopUp = ({ visible, setVisible }) => {
  const userInfo = useSelector((state) => state.user);
  const [currentSns, setCurrentSns] = useState("");
  const linkTo = (sns) => {
    if (userInfo?.snsLinks?.length > 0) {
      const selectedSns = userInfo.snsLinks.filter((link) => link.type === sns);
      if (selectedSns[0]) {
        const link = selectedSns[0].link;
        Linking.openURL(link.includes("https://") ? link : `https://${link}`);
        setVisible(false);
      } else {
        Alert.alert("경고", `사용자가 설정한 ${sns} 계정이 없습니다.`);
      }
    } else {
      Alert.alert("경고", `사용자가 설정한 ${sns} 계정이 없습니다.`);
    }
  };
  return (
    <>
      {visible && (
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.out}>
            <LinearGradient
              colors={["rgba(242, 246, 255, 1)", "rgba(242, 246, 255, 1)"]}
              style={styles.container}
            >
              <View>
                <View style={styles.iconRow}>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("instagram");
                    }}
                  >
                    <WithLocalSvg
                      width={45}
                      height={45}
                      fill={"#000000"}
                      asset={getIcon("instagram")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("notion");
                    }}
                  >
                    <Image source={NotionIcon} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("blog");
                    }}
                  >
                    <Image source={BlogIcon} style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconRow}>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("github");
                    }}
                  >
                    <Image source={GithubIcon} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("brunch");
                    }}
                  >
                    <Image source={BrunchIcon} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      linkTo("linkedin");
                    }}
                  >
                    <WithLocalSvg
                      width={45}
                      height={45}
                      fill={"#000000"}
                      asset={getIcon("linkedin")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.custom}>
                <View style={styles.customLink}>
                  <TextInput
                    style={{
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 5,
                    }}
                    value={userInfo.email}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default SNSPopUp;

const styles = StyleSheet.create({
  out: {
    position: "absolute",
    zIndex: 100,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 250,
    display: "flex",
    height: 200,
    justifyContent: "center",
    borderRadius: 20,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 250,
    height: 45,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  icon: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  iconRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  custom: {
    width: "100%",
    height: 45,
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  customLink: {
    width: 150,
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
