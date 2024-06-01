import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

function EnterCode() {
  return (
    <LinearGradient colors={["#ffff", "#d3f4f5"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.1 }}
      >
        <View>
          <Text>FormScreen</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default EnterCode;
