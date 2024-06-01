import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Arrow from "../components/Arrow";
import { LinearGradient } from "expo-linear-gradient";
import PointSelector from "../components/PointSelector";

function FormScreen() {
  return (
    <LinearGradient colors={["#b1e2f3", "#ffff"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
      >
        <View style={styles.rootScreen}>
          <View style={styles.upperContainer}>
            <Text
              style={{
                fontSize: 27,
                color: "#173966",
                fontWeight: "bold",
                fontFamily: "sans-serif-medium",
                textAlign: "center",
              }}
            >
              Mark the area where you feel pain
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <Pressable onPress={() => {}} style={styles.arrow}>
              <Arrow rotation="180deg" />
            </Pressable>
            <PointSelector />
            <Pressable onPress={() => {}} style={styles.arrow}>
              <Arrow />
            </Pressable>
          </View>
          <View style={styles.lowerContainer}>
            <PrimaryButton title="Submit" onPress={() => {}} />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootBackground: {
    width: "100%",
    height: "100%",
  },
  rootScreen: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upperContainer: {
    marginTop: 70,
    flex: 2,
  },
  middleContainer: {
    flex: 13,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  lowerContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    opacity: 0.6,
    width: 150,
    height: 150,
  },
  arrow: {
    width: 80,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormScreen;
