import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FloatingLabelInput from "../components/inputs/FloatingLabelInput";

function AdditionalInfoScreen({ route, navigation }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [pastIllness, setPastIllness] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    Alert.alert(
      "Additional Information",
      "Do you want to add more information?",
      [
        {
          text: "No",
          onPress: () => console.log("Submission cancelled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            // Handle the form submission logic here
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <LinearGradient colors={["#b1e2f3", "#ffff"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
      >
        <View style={styles.rootScreen}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text
            style={{
              fontSize: 27,
              color: "#173966",
              fontWeight: "bold",
              fontFamily: "sans-serif-medium",
              textAlign: "center",
            }}
          >
            Enter additional information{" "}
          </Text>
          <View style={styles.formContainer}>
            <FloatingLabelInput
              label="Enter your height..."
              value={height}
              onChangeText={setHeight}
            />
            <FloatingLabelInput
              label="Enter your weight..."
              value={weight}
              onChangeText={setWeight}
            />
            <FloatingLabelInput
              label="Enter your age..."
              value={age}
              onChangeText={setAge}
            />
            <FloatingLabelInput
              label="Enter your past illnesses..."
              value={pastIllness}
              onChangeText={setPastIllness}
            />
            <FloatingLabelInput
              label="Enter your current medications..."
              value={currentMedications}
              onChangeText={setCurrentMedications}
            />

            <PrimaryButton title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    marginTop: 10,
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default AdditionalInfoScreen;
