import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
//   {
//     id: 3,
//     title: "Ghế gấu của Min",
//     price: 300,
//     image: require("../assets/bear-chair.jpg"),
//   },
//   {
//     id: 4,
//     title: "White lamp",
//     price: 20,
//     image: require("../assets/background.jpg"),
//   },
// ];

export default function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setIsLoading(true);
    const response = await listingsApi.getListings();
    setIsLoading(false);

    if (!response.ok) {
      return setHasError(true);
    }

    setHasError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {hasError && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={colors.primary}
          size="large"
        />
      )}
      {/* <AppActivityIndicator visible={true} /> */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
