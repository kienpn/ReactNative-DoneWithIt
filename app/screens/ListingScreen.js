import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "../components/AppTextInput";
import Card from "../components/Card";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Ghế gấu của Min",
    price: 300,
    image: require("../assets/bear-chair.jpg"),
  },
  {
    id: 4,
    title: "White lamp",
    price: 20,
    image: require("../assets/background.jpg"),
  },
];

export default function ListingScreen({ navigation }) {
  //   const [firstName, setFirstName] = useState("");

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
