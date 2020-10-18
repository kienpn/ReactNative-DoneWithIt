import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least 1 image."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#26de81",
    icon: "tshirt-crew",
  },
  { label: "Cameras", value: 3, backgroundColor: "#0fb9b1", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "#4b7bec", icon: "car" },
  {
    label: "Gamers",
    value: 5,
    backgroundColor: "#a55eea",
    icon: "gamepad-square",
  },
  { label: "Sport", value: 6, backgroundColor: "#34495e", icon: "soccer" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#f7b731",
    icon: "movie-open",
  },
  { label: "Books", value: 8, backgroundColor: "#0fbcf9", icon: "book" },
  { label: "Others", value: 9, backgroundColor: "#ff7675", icon: "shopping" },
];

export default function ListingEditScreen(props) {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) return alert("Could not save the listing.");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <FormField
          maxLength={255}
          name="title"
          placeholder="Title                                               "
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price                                               "
          width={120}
        />

        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description                                               "
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    top: 50,
    marginBottom: 70,
  },
});
