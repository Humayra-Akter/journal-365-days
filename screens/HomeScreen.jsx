import { View, Button, StyleSheet } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

export default function HomeScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Button
        styles={styles.button}
        title="Logout"
        onPress={() => {
          auth().signOut();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FF5733",
    padding: 12,
    borderRadius: 10,
    marginBottom: 11,
  },
});
