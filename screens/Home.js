import { Text } from "react-native";
import { NameContext } from "../Utils/name-context";
import { useContext } from "react";
function Home() {
  const nameCtx = useContext(NameContext);
  return <Text>Hey {nameCtx.name}!!</Text>;
}
export default Home;
