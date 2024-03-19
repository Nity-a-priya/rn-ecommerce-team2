import { Button, TextInput, View, StyleSheet } from "react-native";

function Login() {
  return (
    <View style={styles.rootContainer}>
      <TextInput placeholder="Enter your name!" style={styles.textInput} />

      <Button title="Submit" />
    </View>

  );
}
// TEST
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
