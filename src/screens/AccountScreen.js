import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const AccountScreen = () => {
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
};

const Account = {
  component: AccountScreen,
  options: {
    tabBarIcon: ({ size, color }) => (
      <FontAwesome6 name="user" size={size} color={color} />
    ),
  },
};

export default Account;

const styles = StyleSheet.create({});
