import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import PointSelectorArea from "../components/PointSelectorArea";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Arrow from "../components/Arrow";
import { LinearGradient } from "expo-linear-gradient";

function PainScreen({
  point,
  setPoint,
  humanImage,
  setHumanImage,
  setFormPage,
}) {
  listHumanImages = ["front", "leftSide", "back", "rightSide"];
  currentImageIndex = listHumanImages.indexOf(humanImage);

  function handleRightArrowPress() {
    if (currentImageIndex === listHumanImages.length - 1) {
      setHumanImage(listHumanImages[0]);
    } else {
      setHumanImage(listHumanImages[currentImageIndex + 1]);
    }
    setPoint({ x: -500, y: -500 });
  }
  function handleInfoScreenPress() {
    setFormPage("InfoScreen");
  }

  function handleLeftArrowPress() {
    if (currentImageIndex === 0) {
      setHumanImage(listHumanImages[listHumanImages.length - 1]);
    } else {
      setHumanImage(listHumanImages[currentImageIndex - 1]);
    }
    setPoint({ x: -500, y: -500 });
  }

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
            <Pressable onPress={handleLeftArrowPress} style={styles.arrow}>
              <Arrow rotation="180deg" />
            </Pressable>
            <PointSelectorArea
              humanImage={humanImage}
              setPoint={setPoint}
              point={point}
            />
            <Pressable onPress={handleRightArrowPress} style={styles.arrow}>
              <Arrow />
            </Pressable>
          </View>
          <View style={styles.lowerContainer}>
            <PrimaryButton title="Submit" onPress={handleInfoScreenPress} />
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
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    borderColor: "black",
    width: "100%",
    marginTop: 45,
  },
  middleContainer: {
    flex: 9,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  lowerContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  arrow: {
    width: 80,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PainScreen;
