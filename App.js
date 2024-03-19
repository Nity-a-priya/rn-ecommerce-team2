import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import {getStoreData} from "../Utils/AsyncStorage";
import { Home } from "wd/lib/special-keys";



function auth(){
  const name = getStoreData("name");
  console.log(name);
  if(!name){
    return <Login />
  }
  else{
   return <Home />
  }

}


export default function App() {

  return (
    <SafeAreaView>
      <auth />
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
