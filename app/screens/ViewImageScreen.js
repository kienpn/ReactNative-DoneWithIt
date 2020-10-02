import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode=""
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      {/* <View style={styles.closeIcon} /> */}
      <MaterialCommunityIcons
        name="close"
        size={35}
        color={colors.white}
        style={styles.closeIcon}
      />
      {/* <View style={styles.deleteIcon} /> */}
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.white}
        style={styles.deleteIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // backgroundColor: colors.primary,
    // width: 50,
    // height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    // backgroundColor: colors.secondary,
    // width: 50,
    // height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
