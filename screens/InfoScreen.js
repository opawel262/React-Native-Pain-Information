import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { createPainInfo } from "../utils/http";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { Picker } from "@react-native-picker/picker";
import LoadingOverlay from "../components/LoadingOverlay";

function InfoScreen({
  setFormPage,
  intensityOfPain,
  setIntensityOfPain,
  typeOfPain,
  setTypeOfPain,
  note,
  setNote,
  HumanInformation,
  setCode,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (intensityOfPain === "" || typeOfPain === "") {
      Alert.alert("Error", "Please fill two first fields");
      return;
    }
    Alert.alert(
      "Additional Information",
      "Do you want to add more information?",
      [
        {
          text: "No",
          onPress: async () => {
            setIsLoading(true);
            try {
              const requestData = {
                ...HumanInformation,
              };
              console.log(requestData);

              const response = await createPainInfo(requestData);
              setIsLoading(false);
              setFormPage("ReturnCodeScreen");
              HumanInformation = {
                ...response,
              };
              setCode(HumanInformation.code);
              console.log(HumanInformation);
            } catch (error) {
              setIsLoading(false);
              Alert.alert("Error", "Failed to create pain info");
              setFormPage("PainScreen");
            }
          },
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            setIsLoading(true);
            try {
              const requestData = {
                ...HumanInformation,
              };
              console.log(requestData);

              const response = await createPainInfo(requestData);
              setIsLoading(false);
              setFormPage("AdditionalInfoScreen");
              HumanInformation = {
                ...response,
              };
              setCode(HumanInformation.code);
              console.log(HumanInformation);
            } catch (error) {
              setIsLoading(false);
              Alert.alert("Error", "Failed to create pain info");
              setFormPage("PainScreen");
            }
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
        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <View style={styles.rootScreen}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text
              style={{
                fontSize: 27,
                color: "#173966",
                fontWeight: "bold",
                fontFamily: "sans-serif-medium",
                textAlign: "center",
                paddingBottom: 10,
              }}
            >
              Enter information{" "}
            </Text>
            <View style={styles.formContainer}>
              <View style={styles.pickerContainer}>
                {intensityOfPain !== "" ? (
                  <Text style={styles.pickerPlaceholder}>
                    Intensity of Pain (1-10)
                  </Text>
                ) : null}
                <Picker
                  selectedValue={intensityOfPain}
                  onValueChange={(itemValue, itemIndex) =>
                    setIntensityOfPain(itemValue)
                  }
                  style={[styles.picker, intensityOfPain && styles.pickerValue]}
                >
                  <Picker.Item label="Intensity of Pain (1-10)" value="" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                  <Picker.Item label="10" value="10" />
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                {typeOfPain !== "" ? (
                  <Text style={styles.pickerPlaceholder}>Type of Pain</Text>
                ) : null}
                <Picker
                  selectedValue={typeOfPain}
                  onValueChange={(itemValue, itemIndex) =>
                    setTypeOfPain(itemValue)
                  }
                  style={[styles.picker, typeOfPain && styles.pickerValue]}
                >
                  <Picker.Item label="Type of Pain" value="" />
                  <Picker.Item label="Pulsating" value="pulsating" />
                  <Picker.Item label="Sharp" value="sharp" />
                  <Picker.Item label="Dull" value="dull" />
                  <Picker.Item label="Throbbing" value="throbbing" />
                  {/* Add more options as needed */}
                </Picker>
              </View>
              <TextInput
                style={[styles.input, styles.multilineInput]}
                placeholder="Enter your notes here..."
                value={note}
                onChangeText={setNote}
                multiline={true}
              />
              <PrimaryButton title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        )}
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
    marginVertical: 1,
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pickerContainer: {
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 6,
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 9,
  },
  picker: {
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  pickerValue: { transform: [{ translateY: 12 }] },
  input: {
    width: "90%",
    marginVertical: 8,
    padding: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  multilineInput: {
    height: "25%", //
    textAlignVertical: "top",
  },
  pickerPlaceholder: {
    position: "absolute",
    left: 10,
    top: 12,
    fontSize: 16,
    color: "#a8a8a8", // color for the placeholder text
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default InfoScreen;
