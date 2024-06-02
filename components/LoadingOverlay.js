import { View, ActivityIndicator, StyleSheet } from "react-native";
function LoadingOverlay() {
  return (
    <View style="container">
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}
export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
