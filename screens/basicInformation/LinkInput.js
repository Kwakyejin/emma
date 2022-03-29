import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { getIcon } from "../../functions/getIcon";
import BlogIcon from "../../assets/SNS/blog.png";
import NotionIcon from "../../assets/SNS/notion.png";
import GithubIcon from "../../assets/SNS/GITHUB.png";
import BrunchIcon from "../../assets/SNS/brunch.png";
import Input from "../../components/Input";

export const getPng = (icon) => {
  switch (icon) {
    case "blog":
      return BlogIcon;
    case "notion":
      return NotionIcon;
    case "github":
      return GithubIcon;
    case "brunch":
      return BrunchIcon;
    default:
      return NotionIcon;
  }
};

const LinkInput = ({ snsObject, setSnsObject }) => {
  const { type } = snsObject;
  const [link, setLink] = useState("");

  useEffect(() => {
    setSnsObject({ ...snsObject, link: link });
  }, [link]);

  return (
    <View>
      <LinearGradient
        colors={["rgba(200, 215, 255, 1)", "rgba(200, 215, 255, 0.2)"]}
        style={styles.container}
      >
        <View style={styles.header}>
          <View>
            <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 16 }}>
              +
            </Text>
          </View>
          <View>
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
              Link 추가하기
            </Text>
          </View>
          <View></View>
        </View>
        <View style={styles.bottom}>
          <View style={{ width: "20%" }}>
            {type === "instagram" || type === "linkedin" ? (
              <WithLocalSvg
                width={40}
                height={40}
                fill={"#000000"}
                asset={getIcon(type)}
                style={styles.icon}
              />
            ) : (
              <Image source={getPng(type)} style={styles.bottomIcon} />
            )}
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={styles.textInput}
              placeholder="링크를 입력해주세요"
              value={link}
              onChangeText={setLink}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LinkInput;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    paddingVertical: 16,
  },
  outer: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: 250,
    display: "flex",
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
  bottom: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  bottomIcon: {
    width: 40,
    height: 40,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
