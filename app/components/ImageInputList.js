import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}) {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View style={styles.image}>
            <ImageInput
              imageUri={uri}
              key={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { marginRight: 10 },
});
