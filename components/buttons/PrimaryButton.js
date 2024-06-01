import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function PrimaryButton({ title, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <LinearGradient colors={["#41C9E2", "#227DDA"]} style={styles.gradient}>
          <View>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 55,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#222",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 6,
  },
  button: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.8,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
});

export default PrimaryButton;
