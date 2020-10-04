import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
        )}
      </View>

      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray300,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});
