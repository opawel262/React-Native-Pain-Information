import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

function PointSelectorArea({ humanImage, setPoint, point }) {
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newPoint = {
      x: parseFloat(locationX.toFixed(2)),
      y: parseFloat(locationY.toFixed(2)),
    };
    setPoint(newPoint);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} style={styles.container}>
      <View style={styles.container}>
        {point && (
          <View
            style={[styles.point, { top: point.y - 5, left: point.x - 5 }]}
          />
        )}
        {humanImage === "front" && (
          <Image
            source={require("../assets/images/human/front.png")}
            style={{
              width: 150,
              height: 500,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            resizeMode="contain"
          />
        )}
        {humanImage === "back" && (
          <Image
            source={require("../assets/images/human/back.png")}
            style={{
              width: 150,
              height: 500,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            resizeMode="contain"
          />
        )}
        {humanImage === "leftSide" && (
          <Image
            source={require("../assets/images/human/leftSide.png")}
            style={{
              width: 150,
              height: 500,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            resizeMode="contain"
          />
        )}
        {humanImage === "rightSide" && (
          <Image
            source={require("../assets/images/human/rightSide.png")}
            style={{
              width: 150,
              height: 500,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 500,
    backgroundColor: "transparent", // Transparent background
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 5,
  },
  text: {
    position: "absolute",
    bottom: 10,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 5,
  },
});

export default PointSelectorArea;
