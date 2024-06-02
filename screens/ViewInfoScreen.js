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
import { LinearGradient } from "expo-linear-gradient";

function ViewInfoScreen({ route, navigation }) {
  const { HumanInformation } = route.params;

  const point = {
    x: HumanInformation.pain_location_x,
    y: HumanInformation.pain_location_y,
  };
  const formattedDate = new Date(HumanInformation.created_at)
    .toISOString()
    .split("T")[0];
  function handleInfoScreenPress() {
    navigation.navigate("Additional Info", { HumanInformation, formattedDate });
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
              Pain Information from {formattedDate}
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <PointSelectorArea
              humanImage={HumanInformation.body_side}
              point={point}
              freeze={true}
            />
          </View>
          <View style={styles.lowerContainer}>
            <PrimaryButton title="Next" onPress={handleInfoScreenPress} />
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
export default ViewInfoScreen;
