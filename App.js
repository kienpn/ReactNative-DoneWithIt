import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  let x = 1;
  console.log("App executed");

  return (
    <WelcomeScreen />
    // <View style={styles.container}>
    //   <Text>Hello React Native!</Text>
    //   <Button title="Click here" />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});
