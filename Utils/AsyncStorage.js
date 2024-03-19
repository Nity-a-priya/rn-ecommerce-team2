import AsyncStorage from '@react-native-async-storage/async-storage';

async function setStoreData(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error)
    }
};

async function getStoreData(key) {
    let value;
    try {
        value = await AsyncStorage.getItem(key);
    } catch (e) {
        console.log("Error ", e)
    }
    return value
};


export default {getStoreData, setStoreData}