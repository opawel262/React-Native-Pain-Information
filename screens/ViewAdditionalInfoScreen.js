import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
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
          <View style={styles.doubleInput}>
            <View style={styles.textField}>
              <Text style={styles.label}>Pain Type</Text>
              <TextInput
                value={HumanInformation.type_of_pain}
                inputMode="text"
                editable={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.textField}>
              <Text style={styles.label}>Pain intensity </Text>
              <TextInput
                value={HumanInformation.intensity_of_pain.toString()}
                editable={false}
                style={styles.textInput}
              />
            </View>
          </View>

          {HumanInformation.has_additional_info == true ? (
            <>
              <View style={styles.doubleInput}>
                <View style={styles.textField}>
                  <Text style={styles.label}>Height</Text>
                  <TextInput
                    value={
                      HumanInformation.additionalInfo.height_cm
                        ? HumanInformation.additionalInfo.height_cm.toString()
                        : "N/A"
                    }
                    editable={false}
                    style={styles.textInput}
                  />
                </View>
                <View style={styles.textField}>
                  <Text style={styles.label}>Weight</Text>
                  <TextInput
                    value={
                      HumanInformation.additionalInfo.weight_kg
                        ? HumanInformation.additionalInfo.weight_kg.toString()
                        : "N/A"
                    }
                    editable={false}
                    style={styles.textInput}
                  />
                </View>
                <View style={styles.textField}>
                  <Text style={styles.label}>Age</Text>
                  <TextInput
                    value={
                      HumanInformation.additionalInfo.age
                        ? HumanInformation.additionalInfo.age.toString()
                        : "N/A"
                    }
                    editable={false}
                    style={styles.textInput}
                  />
                </View>
              </View>
              <View style={styles.multiLineTextField}>
                <Text style={styles.label}>Past Ilnesses</Text>
                <ScrollView style={styles.scrollContainer}>
                  <TextInput
                    editable={false}
                    value={HumanInformation.additionalInfo.past_illnesses}
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={12} // Ustaw maksymalną wysokość pola TextInput
                  />
                </ScrollView>
              </View>
              <View style={styles.multiLineTextField}>
                <Text style={styles.label}>Current medications</Text>
                <ScrollView style={styles.scrollContainer}>
                  <TextInput
                    editable={false}
                    value={HumanInformation.additionalInfo.current_medications}
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={12} // Ustaw maksymalną wysokość pola TextInput
                  />
                </ScrollView>
              </View>
              <View style={styles.multiLineTextField}>
                <Text style={styles.label}>Note</Text>
                <ScrollView style={styles.scrollContainer}>
                  <TextInput
                    editable={false}
                    value={HumanInformation.note}
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={12} // Ustaw maksymalną wysokość pola TextInput
                  />
                </ScrollView>
              </View>
            </>
          ) : (
            <View style={styles.multiLineTextField}>
              <Text style={styles.label}>Note</Text>
              <ScrollView style={styles.scrollContainer}>
                <TextInput
                  editable={false}
                  value="aldsadkasaselwqkelkqekqwlewqkelwqkelqekqwlekqwedkwqaldklqkwelwqkelkqekqwlewqkelwqkelqekqwlekqwealdskqekqwlewqkelwqkelqekqwlekqwedkwqaldklqkwelwqkelkqekqwlewqkelwqkelqekqwlekqwe"
                  style={styles.textInput}
                  multiline={true}
                  numberOfLines={12} // Ustaw maksymalną wysokość pola TextInput
                />
              </ScrollView>
            </View>
          )}

          <View style={styles.lowerContainer}>
            <PrimaryButton title="Back" onPress={handleInfoScreenPress} />
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
  upperContainer: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    borderColor: "black",
    width: "100%",
    marginTop: 45,
  },
  doubleInput: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
  },
  textField: {
    height: 70, // Ustaw maksymalną wysokość pola TextInput
    marginHorizontal: 5,
    flex: 1,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5f5fb",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 15,
    borderBottomColor: "#a4e4f4",
    borderBottomWidth: 6,
    fontColor: "#000",
  },
  multiLineTextField: {
    height: "100%", // Ustaw maksymalną wysokość pola TextInput
    padding: 14,
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5f5fb",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 15,
    borderBottomColor: "#a4e4f4",
    borderBottomWidth: 6,
    fontColor: "#000",
  },
  lowerContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    fontSize: 17,
    color: "#111",
    textAlignVertical: "top", // Ustawienie, aby tekst był wyświetlany od góry
  },
  label: {
    fontSize: 20,
    color: "#173966",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    textAlign: "left",
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
  },
});

export default ViewAdditionalInfoScreen;
