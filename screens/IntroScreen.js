import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

function IntroScreen({ navigation }) {
  function handleCreatePress() {
    navigation.navigate("Form");
  }

  function handleEnterCodePress() {
    navigation.navigate("Enter Code");
  }

  return (
    <LinearGradient colors={["#b1e2f3", "#ffff"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.rootScreen}>
          <View style={styles.upperContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.text}>
              Use our app to complete a pain survey for a code, or enter your
              code to get pain information.
            </Text>
          </View>
          <View style={styles.lowerContainer}>
            <PrimaryButton title="Create" onPress={handleCreatePress} />
            <PrimaryButton title="Enter code" onPress={handleEnterCodePress} />
          </View>
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
  upperContainer: {
    flex: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  middleContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "85%",
  },
  lowerContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 120,
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: "contain",
  },
  text: {
    fontSize: 27,
    color: "#173966",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
});

export default IntroScreen;
