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
import { createAdditionalPainInfo } from "../utils/http";

function AdditionalInfoScreen({
  heightCm,
  setHeightCm,
  weightKg,
  setWeightKg,
  age,
  setAge,
  pastIlnesses,
  setPastIlnesses,
  medications,
  setMedications,
  setFormPage,
  HumanAdditionalInformation,
  setCode,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const requestData = {
        ...HumanAdditionalInformation,
      };
      console.log(requestData);

      const response = await createAdditionalPainInfo(requestData);
      setIsLoading(false);
      setFormPage("ReturnCodeScreen");
      HumanAdditionalInformation = {
        ...response,
      };
      setCode(HumanAdditionalInformation.code);
      console.log(HumanAdditionalInformation);
    } catch (error) {
      setIsLoading(false);

      console.error(error); // Log the error to the console
      Alert.alert("Error", "Failed to create additional pain info");
      setFormPage("InfoScreen");
    }
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
              value={heightCm}
              onChangeText={setHeightCm}
            />
            <FloatingLabelInput
              label="Enter your weight..."
              value={weightKg}
              onChangeText={setWeightKg}
            />
            <FloatingLabelInput
              label="Enter your age..."
              value={age}
              onChangeText={setAge}
            />
            <FloatingLabelInput
              label="Enter your past illnesses..."
              value={pastIlnesses}
              onChangeText={setPastIlnesses}
            />
            <FloatingLabelInput
              label="Enter your current medications..."
              value={medications}
              onChangeText={setMedications}
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
