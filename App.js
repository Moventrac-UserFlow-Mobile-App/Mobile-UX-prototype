import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "./Context";
import StackNav from "./StackNav";

export default function App() {
  return (
    <View style={styles.container}>
      <FitnessContext>
        <StackNav />
      </FitnessContext>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(117,145,205,1) 35%, rgba(0,212,255,1) 100%)",
  },
});
