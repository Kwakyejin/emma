import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getPng } from "../functions/getPng";

const IconSelector = ({ icon, setIcon, setVisible }) => {
  return (
    <ScrollView
      style={{
        height: "100%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20,
      }}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <View
        style={{
          marginLeft: "15%",
          width: 0,
          height: 0,
          borderLeftWidth: 25,
          borderRightWidth: 25,
          borderBottomWidth: 30,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "white",
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height:"100%",
          borderRadius: 30,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "3%",
          }}
        >
          <View
            style={{
              width: 282,
              height: 20.96,
              backgroundColor: "#C8D7FF",
              borderRadius: 23,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 9, fontWeight: "700" }}>
              직무아이콘
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("playlist");
              setVisible(false);
            }}
          >
            <Image source={getPng("playlist")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("palace");
              setVisible(false);
            }}
          >
            <Image source={getPng("palace")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("court");
              setVisible(false);
            }}
          >
            <Image source={getPng("court")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("towerbuilding");
              setVisible(false);
            }}
          >
            <Image source={getPng("towerbuilding")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("building");
              setVisible(false);
            }}
          >
            <Image source={getPng("building")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("homebuilding");
              setVisible(false);
            }}
          >
            <Image source={getPng("homebuilding")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("court2");
              setVisible(false);
            }}
          >
            <Image source={getPng("court2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("home1");
              setVisible(false);
            }}
          >
            <Image source={getPng("home1")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("home2");
              setVisible(false);
            }}
          >
            <Image source={getPng("home2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("hospital");
              setVisible(false);
            }}
          >
            <Image source={getPng("hospital")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("building2");
              setVisible(false);
            }}
          >
            <Image source={getPng("building2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("store");
              setVisible(false);
            }}
          >
            <Image source={getPng("store")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("store2");
              setVisible(false);
            }}
          >
            <Image source={getPng("store2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("store3");
              setVisible(false);
            }}
          >
            <Image source={getPng("store3")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("hearthouse");
              setVisible(false);
            }}
          >
            <Image source={getPng("hearthouse")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("book");
              setVisible(false);
            }}
          >
            <Image source={getPng("book")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("book2");
              setVisible(false);
            }}
          >
            <Image source={getPng("book2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("book3");
              setVisible(false);
            }}
          >
            <Image source={getPng("book3")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("openbook");
              setVisible(false);
            }}
          >
            <Image source={getPng("openbook")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("numberbook");
              setVisible(false);
            }}
          >
            <Image source={getPng("numberbook")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("paper");
              setVisible(false);
            }}
          >
            <Image source={getPng("paper")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("gifpaper");
              setVisible(false);
            }}
          >
            <Image source={getPng("gifpaper")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("timepaper");
              setVisible(false);
            }}
          >
            <Image source={getPng("timepaper")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("korean");
              setVisible(false);
            }}
          >
            <Image source={getPng("korean")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("information");
              setVisible(false);
            }}
          >
            <Image source={getPng("information")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("timefolder");
              setVisible(false);
            }}
          >
            <Image source={getPng("timefolder")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("songfolder");
              setVisible(false);
            }}
          >
            <Image source={getPng("songfolder")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("folder");
              setVisible(false);
            }}
          >
            <Image source={getPng("folder")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("personfolder");
              setVisible(false);
            }}
          >
            <Image source={getPng("personfolder")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("diary");
              setVisible(false);
            }}
          >
            <Image source={getPng("diary")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("ad");
              setVisible(false);
            }}
          >
            <Image source={getPng("ad")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("drawer");
              setVisible(false);
            }}
          >
            <Image source={getPng("drawer")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("clip");
              setVisible(false);
            }}
          >
            <Image source={getPng("clip")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("box");
              setVisible(false);
            }}
          >
            <Image source={getPng("box")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("box2");
              setVisible(false);
            }}
          >
            <Image source={getPng("box2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("day");
              setVisible(false);
            }}
          >
            <Image source={getPng("day")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("cloud");
              setVisible(false);
            }}
          >
            <Image source={getPng("cloud")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("internet");
              setVisible(false);
            }}
          >
            <Image source={getPng("internet")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("link");
              setVisible(false);
            }}
          >
            <Image source={getPng("link")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("newspaper");
              setVisible(false);
            }}
          >
            <Image source={getPng("newspaper")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("certificate");
              setVisible(false);
            }}
          >
            <Image source={getPng("certificate")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("heart");
              setVisible(false);
            }}
          >
            <Image source={getPng("heart")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("media");
              setVisible(false);
            }}
          >
            <Image source={getPng("media")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tm");
              setVisible(false);
            }}
          >
            <Image source={getPng("tm")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("browser");
              setVisible(false);
            }}
          >
            <Image source={getPng("browser")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("newspaper2");
              setVisible(false);
            }}
          >
            <Image source={getPng("newspaper2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("snow");
              setVisible(false);
            }}
          >
            <Image source={getPng("snow")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("en");
              setVisible(false);
            }}
          >
            <Image source={getPng("en")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("percent");
              setVisible(false);
            }}
          >
            <Image source={getPng("percent")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("statics");
              setVisible(false);
            }}
          >
            <Image source={getPng("statics")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("carculate");
              setVisible(false);
            }}
          >
            <Image source={getPng("carculate")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("linestatic");
              setVisible(false);
            }}
          >
            <Image source={getPng("linestatic")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("circlestatic");
              setVisible(false);
            }}
          >
            <Image source={getPng("circlestatic")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("circlestatic2");
              setVisible(false);
            }}
          >
            <Image source={getPng("circlestatic2")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("presentation");
              setVisible(false);
            }}
          >
            <Image source={getPng("presentation")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("barstastic");
              setVisible(false);
            }}
          >
            <Image source={getPng("barstastic")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("link2");
              setVisible(false);
            }}
          >
            <Image source={getPng("link2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("hierarchy");
              setVisible(false);
            }}
          >
            <Image source={getPng("hierarchy")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("electric");
              setVisible(false);
            }}
          >
            <Image source={getPng("electric")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tele");
              setVisible(false);
            }}
          >
            <Image source={getPng("tele")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("tele2");
              setVisible(false);
            }}
          >
            <Image source={getPng("tele2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("send");
              setVisible(false);
            }}
          >
            <Image source={getPng("send")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("saycomma");
              setVisible(false);
            }}
          >
            <Image source={getPng("saycomma")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("message");
              setVisible(false);
            }}
          >
            <Image source={getPng("message")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("certificate2");
              setVisible(false);
            }}
          >
            <Image source={getPng("certificate2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("certificate3");
              setVisible(false);
            }}
          >
            <Image source={getPng("certificate3")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("game");
              setVisible(false);
            }}
          >
            <Image source={getPng("game")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("presentation2");
              setVisible(false);
            }}
          >
            <Image source={getPng("presentation2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("wincup");
              setVisible(false);
            }}
          >
            <Image source={getPng("wincup")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("diamond");
              setVisible(false);
            }}
          >
            <Image source={getPng("diamond")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("andriod");
              setVisible(false);
            }}
          >
            <Image source={getPng("andriod")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("apple");
              setVisible(false);
            }}
          >
            <Image source={getPng("apple")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("tabletennis");
              setVisible(false);
            }}
          >
            <Image source={getPng("tabletennis")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("eat");
              setVisible(false);
            }}
          >
            <Image source={getPng("eat")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("basketball");
              setVisible(false);
            }}
          >
            <Image source={getPng("basketball")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("soccer");
              setVisible(false);
            }}
          >
            <Image source={getPng("soccer")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("setting");
              setVisible(false);
            }}
          >
            <Image source={getPng("setting")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("c");
              setVisible(false);
            }}
          >
            <Image source={getPng("c")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("r");
              setVisible(false);
            }}
          >
            <Image source={getPng("r")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("artboard2");
              setVisible(false);
            }}
          >
            <Image source={getPng("artboard2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("artboard");
              setVisible(false);
            }}
          >
            <Image source={getPng("artboard")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("ballpen");
              setVisible(false);
            }}
          >
            <Image source={getPng("ballpen")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("collage");
              setVisible(false);
            }}
          >
            <Image source={getPng("collage")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("compasses");
              setVisible(false);
            }}
          >
            <Image source={getPng("compasses")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("dragmove");
              setVisible(false);
            }}
          >
            <Image source={getPng("dragmove")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("focus");
              setVisible(false);
            }}
          >
            <Image source={getPng("focus")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("hammer");
              setVisible(false);
            }}
          >
            <Image source={getPng("hammer")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("inkbottle");
              setVisible(false);
            }}
          >
            <Image source={getPng("inkbottle")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("palette");
              setVisible(false);
            }}
          >
            <Image source={getPng("palette")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("pantone");
              setVisible(false);
            }}
          >
            <Image source={getPng("pantone")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("pencil");
              setVisible(false);
            }}
          >
            <Image source={getPng("pencil")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("quill");
              setVisible(false);
            }}
          >
            <Image source={getPng("quill")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("scissors");
              setVisible(false);
            }}
          >
            <Image source={getPng("scissors")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tools");
              setVisible(false);
            }}
          >
            <Image source={getPng("tools")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("bug");
              setVisible(false);
            }}
          >
            <Image source={getPng("bug")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("code");
              setVisible(false);
            }}
          >
            <Image source={getPng("code")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("command");
              setVisible(false);
            }}
          >
            <Image source={getPng("command")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("gitb");
              setVisible(false);
            }}
          >
            <Image source={getPng("gitb")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("gitp");
              setVisible(false);
            }}
          >
            <Image source={getPng("gitp")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("gitr");
              setVisible(false);
            }}
          >
            <Image source={getPng("gitr")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("terminalb");
              setVisible(false);
            }}
          >
            <Image source={getPng("terminalb")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("terminalw");
              setVisible(false);
            }}
          >
            <Image source={getPng("terminalw")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("barcode");
              setVisible(false);
            }}
          >
            <Image source={getPng("barcode")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("bluetooth");
              setVisible(false);
            }}
          >
            <Image source={getPng("bluetooth")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("computer");
              setVisible(false);
            }}
          >
            <Image source={getPng("computer")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("cpu");
              setVisible(false);
            }}
          >
            <Image source={getPng("cpu")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("dashboard");
              setVisible(false);
            }}
          >
            <Image source={getPng("dashboard")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("database");
              setVisible(false);
            }}
          >
            <Image source={getPng("database")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("fingerprint");
              setVisible(false);
            }}
          >
            <Image source={getPng("fingerprint")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("mac");
              setVisible(false);
            }}
          >
            <Image source={getPng("mac")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("qrcode");
              setVisible(false);
            }}
          >
            <Image source={getPng("qrcode")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("radar");
              setVisible(false);
            }}
          >
            <Image source={getPng("radar")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("router");
              setVisible(false);
            }}
          >
            <Image source={getPng("router")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("rss");
              setVisible(false);
            }}
          >
            <Image source={getPng("rss")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("sdcard");
              setVisible(false);
            }}
          >
            <Image source={getPng("sdcard")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("simcard");
              setVisible(false);
            }}
          >
            <Image source={getPng("simcard")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("simcard2");
              setVisible(false);
            }}
          >
            <Image source={getPng("simcard2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tablet");
              setVisible(false);
            }}
          >
            <Image source={getPng("tablet")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tv");
              setVisible(false);
            }}
          >
            <Image source={getPng("tv")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("usb");
              setVisible(false);
            }}
          >
            <Image source={getPng("usb")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("charge");
              setVisible(false);
            }}
          >
            <Image source={getPng("charge")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("exchange");
              setVisible(false);
            }}
          >
            <Image source={getPng("exchange")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("handcoin");
              setVisible(false);
            }}
          >
            <Image source={getPng("handcoin")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("handheart");
              setVisible(false);
            }}
          >
            <Image source={getPng("handheart")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("moneydallar");
              setVisible(false);
            }}
          >
            <Image source={getPng("moneydallar")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("safe");
              setVisible(false);
            }}
          >
            <Image source={getPng("safe")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("secure");
              setVisible(false);
            }}
          >
            <Image source={getPng("secure")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("shoppingbag");
              setVisible(false);
            }}
          >
            <Image source={getPng("shoppingbag")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("shoppingbasket");
              setVisible(false);
            }}
          >
            <Image source={getPng("shoppingbasket")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("shoppingcart");
              setVisible(false);
            }}
          >
            <Image source={getPng("shoppingcart")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("ticket2");
              setVisible(false);
            }}
          >
            <Image source={getPng("ticket2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("wallet");
              setVisible(false);
            }}
          >
            <Image source={getPng("wallet")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("waterflash");
              setVisible(false);
            }}
          >
            <Image source={getPng("waterflash")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("capsule");
              setVisible(false);
            }}
          >
            <Image source={getPng("capsule")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("flask");
              setVisible(false);
            }}
          >
            <Image source={getPng("flask")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("group");
              setVisible(false);
            }}
          >
            <Image source={getPng("group")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("heartpulse");
              setVisible(false);
            }}
          >
            <Image source={getPng("heartpulse")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("lungs");
              setVisible(false);
            }}
          >
            <Image source={getPng("lungs")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("medicine");
              setVisible(false);
            }}
          >
            <Image source={getPng("medicine")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("mental");
              setVisible(false);
            }}
          >
            <Image source={getPng("mental")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("micros");
              setVisible(false);
            }}
          >
            <Image source={getPng("micros")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("psycho");
              setVisible(false);
            }}
          >
            <Image source={getPng("psycho")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("pulse");
              setVisible(false);
            }}
          >
            <Image source={getPng("pulse")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("stetho");
              setVisible(false);
            }}
          >
            <Image source={getPng("stetho")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("syringe");
              setVisible(false);
            }}
          >
            <Image source={getPng("syringe")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("test");
              setVisible(false);
            }}
          >
            <Image source={getPng("test")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("anchor");
              setVisible(false);
            }}
          >
            <Image source={getPng("anchor")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("bus");
              setVisible(false);
            }}
          >
            <Image source={getPng("bus")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("compass2");
              setVisible(false);
            }}
          >
            <Image source={getPng("compass2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("compass3");
              setVisible(false);
            }}
          >
            <Image source={getPng("compass3")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("cup");
              setVisible(false);
            }}
          >
            <Image source={getPng("cup")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("bike");
              setVisible(false);
            }}
          >
            <Image source={getPng("bike")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("earth");
              setVisible(false);
            }}
          >
            <Image source={getPng("earth")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("globe");
              setVisible(false);
            }}
          >
            <Image source={getPng("globe")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("goblet");
              setVisible(false);
            }}
          >
            <Image source={getPng("goblet")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("group2");
              setVisible(false);
            }}
          >
            <Image source={getPng("group2")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("luggage");
              setVisible(false);
            }}
          >
            <Image source={getPng("luggage")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("plane");
              setVisible(false);
            }}
          >
            <Image source={getPng("plane")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("restaurant2");
              setVisible(false);
            }}
          >
            <Image source={getPng("restaurant2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("restaurant");
              setVisible(false);
            }}
          >
            <Image source={getPng("restaurant")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("riding");
              setVisible(false);
            }}
          >
            <Image source={getPng("riding")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("roadmap");
              setVisible(false);
            }}
          >
            <Image source={getPng("roadmap")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("roadster");
              setVisible(false);
            }}
          >
            <Image source={getPng("roadster")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("route");
              setVisible(false);
            }}
          >
            <Image source={getPng("route")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("sailvoat");
              setVisible(false);
            }}
          >
            <Image source={getPng("sailvoat")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("ship");
              setVisible(false);
            }}
          >
            <Image source={getPng("ship")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("steering2");
              setVisible(false);
            }}
          >
            <Image source={getPng("steering2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("subway");
              setVisible(false);
            }}
          >
            <Image source={getPng("subway")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("suitcase");
              setVisible(false);
            }}
          >
            <Image source={getPng("suitcase")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("walk");
              setVisible(false);
            }}
          >
            <Image source={getPng("walk")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("broadcast");
              setVisible(false);
            }}
          >
            <Image source={getPng("broadcast")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("camera3");
              setVisible(false);
            }}
          >
            <Image source={getPng("camera3")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("dvd");
              setVisible(false);
            }}
          >
            <Image source={getPng("dvd")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("eject");
              setVisible(false);
            }}
          >
            <Image source={getPng("eject")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("equalizer");
              setVisible(false);
            }}
          >
            <Image source={getPng("equalizer")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("film");
              setVisible(false);
            }}
          >
            <Image source={getPng("film")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("headphone");
              setVisible(false);
            }}
          >
            <Image source={getPng("headphone")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("image2");
              setVisible(false);
            }}
          >
            <Image source={getPng("image2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("image");
              setVisible(false);
            }}
          >
            <Image source={getPng("image")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("movie");
              setVisible(false);
            }}
          >
            <Image source={getPng("movie")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("music");
              setVisible(false);
            }}
          >
            <Image source={getPng("music")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("mv");
              setVisible(false);
            }}
          >
            <Image source={getPng("mv")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("notification2");
              setVisible(false);
            }}
          >
            <Image source={getPng("notification2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("notification3");
              setVisible(false);
            }}
          >
            <Image source={getPng("notification3")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("play");
              setVisible(false);
            }}
          >
            <Image source={getPng("play")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("radio2");
              setVisible(false);
            }}
          >
            <Image source={getPng("radio2")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("radio");
              setVisible(false);
            }}
          >
            <Image source={getPng("radio")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("sound");
              setVisible(false);
            }}
          >
            <Image source={getPng("sound")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("speaker");
              setVisible(false);
            }}
          >
            <Image source={getPng("speaker")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("vidicon");
              setVisible(false);
            }}
          >
            <Image source={getPng("vidicon")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("voiceprint");
              setVisible(false);
            }}
          >
            <Image source={getPng("voiceprint")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("cactus");
              setVisible(false);
            }}
          >
            <Image source={getPng("cactus")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("cake2");
              setVisible(false);
            }}
          >
            <Image source={getPng("cake2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("cake3");
              setVisible(false);
            }}
          >
            <Image source={getPng("cake3")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("knife");
              setVisible(false);
            }}
          >
            <Image source={getPng("knife")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("leaf");
              setVisible(false);
            }}
          >
            <Image source={getPng("leaf")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("lightbulb");
              setVisible(false);
            }}
          >
            <Image source={getPng("lightbulb")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("recycle");
              setVisible(false);
            }}
          >
            <Image source={getPng("recycle")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("scales");
              setVisible(false);
            }}
          >
            <Image source={getPng("scales")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("seedling");
              setVisible(false);
            }}
          >
            <Image source={getPng("seedling")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("tshirt2");
              setVisible(false);
            }}
          >
            <Image source={getPng("tshirt2")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("umbrella");
              setVisible(false);
            }}
          >
            <Image source={getPng("umbrella")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("wheelchair");
              setVisible(false);
            }}
          >
            <Image source={getPng("wheelchair")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("search2");
              setVisible(false);
            }}
          >
            <Image source={getPng("search2")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("parent");
              setVisible(false);
            }}
          >
            <Image source={getPng("parent")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("team");
              setVisible(false);
            }}
          >
            <Image source={getPng("team")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("fire");
              setVisible(false);
            }}
          >
            <Image source={getPng("fire")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("flashlight");
              setVisible(false);
            }}
          >
            <Image source={getPng("flashlight")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("haze");
              setVisible(false);
            }}
          >
            <Image source={getPng("haze")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("moon");
              setVisible(false);
            }}
          >
            <Image source={getPng("moon")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIcon("snowy");
              setVisible(false);
            }}
          >
            <Image source={getPng("snowy")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("suncloudy");
              setVisible(false);
            }}
          >
            <Image source={getPng("suncloudy")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("sun");
              setVisible(false);
            }}
          >
            <Image source={getPng("sun")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("hot");
              setVisible(false);
            }}
          >
            <Image source={getPng("hot")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIcon("windy");
              setVisible(false);
            }}
          >
            <Image source={getPng("windy")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default IconSelector;

const styles = StyleSheet.create({});
