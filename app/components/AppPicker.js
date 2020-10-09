import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={[styles.icon, styles.mr10]}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
              />
            )}
          </View>

          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={defaultStyles.colors.medium}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  {
                    setModalVisible(false);
                    onSelectItem(item);
                  }
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.gray300,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    justifyContent: "center",
  },
  mr10: { marginRight: 10 },
  text: { flex: 1 },
});
