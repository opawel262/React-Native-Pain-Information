import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

const PointSelector = () => {
  const [point, setPoint] = useState(null);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newPoint = { x: locationX, y: locationY };
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
      </View>
    </TouchableWithoutFeedback>
  );
};

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

export default PointSelector;
