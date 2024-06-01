import React from "react";
import { Svg, Path } from "react-native-svg";
import { View } from "react-native";

function Arrow({ width = 32, height = 32, rotation = "0deg" }) {
  return (
    <View style={{ transform: [{ rotate: rotation }] }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <Path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
      </Svg>
    </View>
  );
}
export default Arrow;
