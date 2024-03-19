import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function Login() {
  const [name, setName] = useState("");

  function inputHandler(value) {
    setName(value);
  }
  function submitHandler() {
    console.log(name);
  }

  return (
    <View style={styles.rootContainer}>
      <TextInput
        placeholder="Enter your name!"
        style={styles.textInput}
        onChangeText={inputHandler}
        value={name}
      />

      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  rootContainer: {
    margin: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 16,
    borderRadius: 5,
    marginHorizontal: 16,
    width: "80%",
    marginBottom: 10,
  },
});