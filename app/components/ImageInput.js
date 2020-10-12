import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ImageInput() {
  const [imageUri, setImageUri] = useState();

  const deleteImage = () => {
    Alert.alert("Confirm", "Delete Image?", [
      {
        text: "Yes",
        onPress: () => setImageUri(null),
        style: "default",
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={deleteImage}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="camera"
            size={60}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",

    flexDirection: "row",
    height: 120,
  },
  image: {
    borderRadius: 20,
    height: 120,
    width: 120,
    marginRight: 10,
  },
});
