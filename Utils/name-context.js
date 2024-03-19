import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, createContext } from "react";

export const NameContext = createContext({
  name: "",
  
  setStoreData: () => {},
  getStoreData: () => {},
});

function NameContextProvider({ children }) {
  const [value, setValue] = useState("");

  function setStoreData(key, value) {
    AsyncStorage.setItem(key, value);
    setValue(value);
  }

  async function getStoreData(key) {
    let name = await AsyncStorage.getItem(key);
    setValue(name);
  }

  const values = {
    name: value,
    
    setStoreData: setStoreData,
    getStoreData: getStoreData,
  };

  return <NameContext.Provider value={values}>{children}</NameContext.Provider>;
}

export default NameContextProvider;
