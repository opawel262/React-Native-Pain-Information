import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Clipboard,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { getPainInfo, getAdditionalPainInfo } from "../utils/http";

function EnterCode({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [code, setCode] = React.useState("");
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await getPainInfo(code);
      setIsLoading(false);
      const HumanInformation = {
        ...response,
      };
      if (HumanInformation.has_additional_info === true) {
        const response = await getAdditionalPainInfo(code);
        HumanInformation.additionalInfo = {
          ...response,
        };
      }

      navigation.navigate("View Pain Info", { HumanInformation });
    } catch (error) {
      setIsLoading(false);

      console.error(error); // Log the error to the console
      Alert.alert("Error", "Failed to create additional pain info");
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
          <View style={styles.container}>
            <Text style={styles.text}>Enter code to view pain information</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              value={code}
              onChangeText={setCode}
            />
            <PrimaryButton title="Enter" onPress={handleSubmit} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    flex: 1,
    width: "65%",
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
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
    paddingBottom: 10,
  },
  input: {
    height: 50,
    margin: 6,
    width: "90%",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#fff",
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default EnterCode;
