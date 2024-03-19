import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setStoreData(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error)
    }
};

export async function getStoreData(key) {
    console.log("In getStoredata")
    let value;
    try {
        value = await AsyncStorage.getItem(key);
    } catch (e) {
        console.log("Error ", e)
    }
    console.log("Value == ", value)
    return value
};