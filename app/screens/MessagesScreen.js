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

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Etiam at libero",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat nibh vel metus congue, sodales vehicula purus tempus. Duis tristique neque nisi, nec rhoncus nibh condimentum sed. Maecenas nec auctor magna, luctus commodo dolor. Cras ut tincidunt libero, non sodales tortor. ",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 2,
    title: "Donec",
    subtitle:
      "Nam ut mi et est imperdiet consectetur. Donec auctor, est eu facilisis eleifend, enim risus lobortis nulla, vitae sagittis arcu magna nec eros. Phasellus ut feugiat est.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Pellentesque ",
    subtitle:
      "Etiam at libero viverra dui ultrices iaculis. Nulla non vulputate tortor. Sed lectus neque, luctus non finibus non, dictum et ex. Vivamus varius urna libero, vel suscipit justo ultrices tempus. ",
    image: require("../assets/jacket.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => console.log("Message selected", item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([messages[2], messages[1], messages[0]]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
