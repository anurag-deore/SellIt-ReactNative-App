import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-box"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 10,
    // borderWidth: 10,
    bottom: 20,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
});

export default NewListingButton;
