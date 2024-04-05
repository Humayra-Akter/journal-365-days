import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import auth, { firebase } from "@react-native-firebase/auth";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignup = async () => {
    if (email && password) {
     try{
      const userCreed= await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(userCreed)
     }
     catch(err){
      console.log(err)
      Alert.alert(err.message)
     }
    } else {
      Alert.alert("Please fill all fields");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={onPressSignup} style={styles.button}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Signup</Text>
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
