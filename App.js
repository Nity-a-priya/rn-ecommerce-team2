import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import {getStoreData} from "./Utils/AsyncStorage";
import  Home  from "./screens/Home";



function Auth(){
  
  const name = getStoreData("name");
  console.log(name);
  if(!!name){
    return <Login />
  }
  else{
   return <Home />
  }

}


export default function App() {

  // const name = getStoreData("name");
  // console.log("name ", name);

  return (
    <SafeAreaView>
      <Auth />

    
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
