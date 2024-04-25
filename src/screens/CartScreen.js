import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const Cart = {
  component: CartScreen,
  options: {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name="cart" size={size} color={color} />
    ),
  },
};

export default Cart;

const styles = StyleSheet.create({});
