import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from "react-native";
import { Formik } from "formik";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import { TextInput } from "react-native-gesture-handler";
import AppPicker from "../components/AppPicker";

export default function LoginScreen(props) {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  const [category, setCategory] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="password"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="emailAddress"
            />
            <AppButton title="Login" onPress={handleSubmit} />
            <AppPicker
              icon="apps"
              items={categories}
              onSelectItem={(item) => setCategory(item)}
              placeholder="Category"
              selectedItem={category}
            />
          </>
        )}
      </Formik>
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
