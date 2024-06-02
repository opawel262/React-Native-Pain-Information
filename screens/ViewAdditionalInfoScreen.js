import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import PointSelectorArea from "../components/PointSelectorArea";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Arrow from "../components/Arrow";
import { LinearGradient } from "expo-linear-gradient";
import FloatingLabelInput from "../components/inputs/FloatingLabelInput";

function ViewAdditionalInfoScreen({ route, navigation }) {
  const { HumanInformation, formattedDate } = route.params;
  function handleInfoScreenPress() {
    navigation.goBack();
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
            <View style={styles.textField}>
              <Text styles={styles.label}>Note</Text>
              <TextInput
                value="aldsadkasldkwqaldklqkwelwqkelkqekqwlewqkelwqkelqekqwlekqwe"
                style={styles.TextField}
              />
            </View>

            <TextInput
              label="Note "
              value="aldsadkasldkwqaldklqkwelwqkelkqekqwlewqkelwqkelqekqwlekqwe"
            />

            <Text>cos</Text>
          </View>
          <View style={styles.lowerContainer}>
            <PrimaryButton title="Back" onPress={handleInfoScreenPress} />
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
  label: {
    fontSize: 20,
    color: "#173966",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    textAlign: "left",
  },
  textField: {
    backgroundColor: "#e5f5fb",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 15,
    borderBottomColor: "#a4e4f4",
    borderBottomWidth: 4,
    fontColor: "#000",
  },
  upperContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderColor: "black",
    width: "100%",
    marginTop: 45,
  },
  middleContainer: {
    flex: 7,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },

  text: {
    fontSize: 20,
    color: "#173966",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
});
export default ViewAdditionalInfoScreen;
