import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import IntroScreen from "./screens/IntroScreen";
import EnterCode from "./screens/EnterCode";
import FormScreen from "./screens/FormScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewInfoScreen from "./screens/ViewInfoScreen";
import ViewAdditionalInfoScreen from "./screens/ViewAdditionalInfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);
  return (
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
        <Stack.Screen name="View Pain Info" component={ViewInfoScreen} />
        <Stack.Screen
          name="Additional Info"
          component={ViewAdditionalInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
