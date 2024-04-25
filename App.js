import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/HomeScreen";
import Reorder from "./src/screens/ReorderScreen";
import Cart from "./src/screens/CartScreen";
import Account from "./src/screens/AccountScreen";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#CF9FFF",
        }}
      >
        <Tab.Screen name="HOME" {...Home} />
        <Tab.Screen name="REORDER" {...Reorder} />
        <Tab.Screen name="CART" {...Cart} />
        <Tab.Screen name="ACCOUNT" {...Account} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
