import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});
