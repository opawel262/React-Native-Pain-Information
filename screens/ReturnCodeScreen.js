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

function ReturnCodeScreen() {
  const copyToClipboard = () => {
    Clipboard.setString("123456");
    Alert.alert("Text copied to clipboard!");
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
            <Text style={styles.text}>Generated code</Text>
            <TextInput
              style={styles.input}
              value="123456"
              editable={false}
              selectTextOnFocus={true}
            />
            <PrimaryButton title="Copy" onPress={copyToClipboard} />
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
    borderRadius: 40,
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

export default ReturnCodeScreen;
