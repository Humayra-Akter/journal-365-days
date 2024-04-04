import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignup = ({ navigation }) => {
    navigation.navigate("Signup");
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignup} style={styles.button}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF5733",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
});
