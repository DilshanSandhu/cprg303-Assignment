import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>

      <Pressable
        style={styles.alertButton}
        onPress={() => Alert.alert("Alert Button pressed")}
      >
        <Text style={styles.alertButtonText}>Alert</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  alertButton: {
    margin: 16,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "black",
    alignItems: "center",
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});