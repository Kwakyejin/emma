import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { getIcon } from "../../functions/getIcon";
import BlogIcon from "../../assets/SNS/blog.png";
import NotionIcon from "../../assets/SNS/notion.png";
import GithubIcon from "../../assets/SNS/GITHUB.png";
import BrunchIcon from "../../assets/SNS/brunch.png";

const LinkPopUp = ({
  snsLinks,
  setSnsLinks,
  snsObject,
  setSnsObject,
  setCurrentStep,
}) => {
  return (
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
      <View>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => {
              setSnsObject({ type: "instagram" });
              setCurrentStep(2);
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
              setSnsObject({ type: "notion" });
              setCurrentStep(2);
            }}
          >
            <Image source={NotionIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSnsObject({ type: "blog" });
              setCurrentStep(2);
            }}
          >
            <Image source={BlogIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => {
              setSnsObject({ type: "github" });
              setCurrentStep(2);
            }}
          >
            <Image source={GithubIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSnsObject({ type: "brunch" });
              setCurrentStep(2);
            }}
          >
            <Image source={BrunchIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSnsObject({ type: "linkedin" });
              setCurrentStep(2);
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
        <TouchableOpacity
          onPress={() => {
            setSnsObject({ type: "custom" });
            setCurrentStep(2);
          }}
        >
          <View style={styles.customLink}>
            <WithLocalSvg
              fill={"#000000"}
              width={20}
              height={20}
              asset={getIcon("emmashape")}
              style={styles.icon}
            />
            <Text
              style={{
                color: "#c4c4c4",
                fontSize: 16,
                fontWeight: "600",
                marginLeft: 5,
              }}
            >
              직접 입력하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LinkPopUp;

const styles = StyleSheet.create({
  container: {
    width: 250,
    display: "flex",
    height: 250,
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
