import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoogleMap from "./Map";
import LocationBar from "./LocationBar";
import Request from "./Request";

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleMap />
      <LocationBar></LocationBar>
      <Request></Request>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
