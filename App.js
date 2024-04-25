import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Reorder() {
  return (
    <View>
      <Text>Reorder</Text>
    </View>
  );
}

function Cart() {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}
function Account() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="REORDER" component={Reorder} />
        <Tab.Screen name="CART" component={Cart} />
        <Tab.Screen name="ACCOUNT" component={Account} />
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
