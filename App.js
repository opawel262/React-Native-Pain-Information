import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";
import IntroScreen from "./screens/IntroScreen";
import EnterCode from "./screens/EnterCode";
import FormScreen from "./screens/FormScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerTransparent: true,
            headerTitle: "",
            headerBackTitleVisible: false,
            headerTintColor: "#000",
          }}
        >
          <Stack.Screen name="Welcome" component={IntroScreen} />
          <Stack.Screen name="Enter Code" component={EnterCode} />
          <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
