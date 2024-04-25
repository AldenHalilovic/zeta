import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ReorderScreen = () => {
  return (
    <View>
      <Text>ReorderScreen</Text>
    </View>
  );
};

const Reorder = {
  component: ReorderScreen,
  options: {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name="reorder" size={size} color={color} />
    ),
  },
};

export default Reorder;

const styles = StyleSheet.create({});
