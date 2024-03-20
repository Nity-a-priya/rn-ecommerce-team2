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
import { Ionicons } from "@expo/vector-icons";

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

          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Wishlist"
            component={WishlistScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />

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
