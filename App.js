import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Login from "./screens/Login";
import NameContextProvider, { NameContext } from "./Utils/name-context";

import HomeScreen from "./screens/HomeScreen";
import WishlistScreen from "./screens/WishlistScreen";
import CartScreen from "./screens/CartScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navigate() {
  const nameCtx = useContext(NameContext);

  // Assuming `getStoreData` is a function defined in your context to get data
  nameCtx.getStoreData("name");

  return (
    <NavigationContainer>
      {!!nameCtx.name ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Wishlist" component={WishlistScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <Login />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NameContextProvider>
        <Navigate />
      </NameContextProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
