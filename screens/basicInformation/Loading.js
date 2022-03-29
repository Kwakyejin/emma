import React, { useEffect } from "react";
import Background from "../../components/Background";
import EmmaShape from "../../assets/emma-shape.svg";
import { WithLocalSvg } from "react-native-svg";

function Loading({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("step1Screen");
    }, 1000);
  }, []);

  return (
    <Background>
      <WithLocalSvg
        width={100}
        height={100}
        fill={"#000000"}
        asset={EmmaShape}
      />
    </Background>
  );
}

export default Loading;
