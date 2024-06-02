import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FloatingLabelInput = ({ label, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, (isFocused || value) && styles.labelFocused]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    position: "absolute",
    left: 10,
    top: 20,
    fontSize: 18,
    color: "#a8a8a8",
    zIndex: 1,
  },
  labelFocused: {
    top: 5,
    left: 10,
    fontSize: 14,
    color: "#a8a8a8",
  },
  input: {
    fontSize: 18,
    width: "100%",
    width: "100%",
    marginVertical: 8,
    padding: 14,
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
});

export default FloatingLabelInput;
