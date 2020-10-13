import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/styles";

export default function ImageInput({ imageUri = null, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
        {!imageUri && (
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="camera"
              size={40}
              color={defaultStyles.colors.medium}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>

    // { <TouchableWithoutFeedback onPress={deleteImage}>
    //   {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
    // </TouchableWithoutFeedback>
    // <TouchableWithoutFeedback onPress={selectImage}>
    //   <View style={styles.button}>
    //     <MaterialCommunityIcons
    //       name="camera"
    //       size={60}
    //       color={defaultStyles.colors.medium}
    //     />
    //   </View>
    // </TouchableWithoutFeedback> }
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  // container: {
  //   alignItems: "center",

  //   flexDirection: "row",
  //   height: 120,
  // },
  image: {
    height: "100%",
    width: "100%",
  },
});
