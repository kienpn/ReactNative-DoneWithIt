import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacityBase,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 21,
    height: 80,
    justifyContent: "center",
    width: 80,
    overflow: "visible",
  },
  touchable: { overflow: "visible" },
});
