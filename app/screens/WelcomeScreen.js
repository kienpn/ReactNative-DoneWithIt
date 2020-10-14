import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={2}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
