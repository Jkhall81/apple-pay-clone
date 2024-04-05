import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CardsList } from "./src/components/CardsList";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CardsList />
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "auto",
  },
});
