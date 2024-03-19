import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import NameContextProvider, { NameContext } from "./Utils/name-context";
import Home from "./screens/Home";
import { useContext, useEffect, useState } from "react";

function Navigate() {
  const nameCtx = useContext(NameContext);

  nameCtx.getStoreData("name");

  return !!nameCtx.name ? <Home /> : <Login />;
}

export default function App() {
  return (
    <SafeAreaView>
      <NameContextProvider>
        <Navigate />
      </NameContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
