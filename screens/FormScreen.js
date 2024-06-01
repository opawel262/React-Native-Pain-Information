import React, { useState } from "react";
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
import PointSelectorArea from "../components/PointSelectorArea";

function FormScreen({ navigation }) {
  const [formPage, setFormPage] = useState(1);
  const [humanImage, setHumanImage] = useState("front");
  listHumanImages = ["front", "leftSide", "back", "rightSide"];
  currentImageIndex = listHumanImages.indexOf(humanImage);
  const [point, setPoint] = useState({ x: -500, y: -500 });
  const HumanInformation = {
    bodyPainLocationX: point.x,
    bodyPainLocationY: point.y,
    bodySide: humanImage,
    note: "",
    typeOfPain: "",
    intesityOfPain: 0,
  };
  const HumanAdditionalInformation = {
    code: "",
    heightCm: 0,
    weightKg: 0,
    age: 0,
    pastIlnesses: "",
    medications: "",
  };
  function handleRightArrowPress() {
    if (currentImageIndex === listHumanImages.length - 1) {
      setHumanImage(listHumanImages[0]);
    } else {
      setHumanImage(listHumanImages[currentImageIndex + 1]);
    }
    setPoint({ x: -500, y: -500 });
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
        {formPage === 1 && (
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
              <PrimaryButton title="Submit" onPress={() => {}} />
            </View>
          </View>
        )}
        {formPage === 2 && <View style={styles.rootScreen}></View>}
        {formPage === 3 && <View style={styles.rootScreen}></View>}
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
    marginTop: 60,
    flex: 2,
  },
  middleContainer: {
    flex: 9,
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
