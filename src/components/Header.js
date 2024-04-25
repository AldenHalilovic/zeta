import React from "react";
import { Platform, StyleSheet, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require("../assets/apps.png")} style={styles.appIcon} />
      </View>
      <Image
        source={require("../assets/Alden - pink - purple.png")}
        style={styles.femen}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:
      Platform.OS === "android" && StatusBar.currentHeight
        ? StatusBar.currentHeight + 40
        : 40,
  },
  appIconContainer: {
    backgroundColor: "#ffffff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  femen: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
