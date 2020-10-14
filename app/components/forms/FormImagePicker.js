import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function FormImagePicker({
  imageUris,
  handleAdd,
  handleRemove,
  name,
}) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
