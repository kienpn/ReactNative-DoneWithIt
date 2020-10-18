import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function AppActivityIndicator({ visible }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader2.json")}
        style={{ width: 100, height: 100 }}
        // style={{ flex: 1 }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
