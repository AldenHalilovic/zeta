import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <Header navigation={navigation} />
    </LinearGradient>
  );
};

const Home = {
  component: HomeScreen,
  options: {
    tabBarIcon: ({ size, color }) => (
      <Entypo name="home" size={size} color={color} />
    ),
  },
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
