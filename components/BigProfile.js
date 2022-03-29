import React from "react";
import { View, Text, Image } from "react-native";

const BigProfile = ({ uri }) => {
  return (
    <View>
      <Image
        style={{
          width: 250,
          height: 250,
          resizeMode: "cover",
          borderWidth: 0,
          borderRadius: 125,
        }}
        source={{ uri: uri }}
      />
    </View>
  );
};

export default BigProfile;
