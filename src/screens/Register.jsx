import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigation.navigate("Feedback");
    }
  }, [user]);

  const handleRegister = async () => {
    try {
      let payload = {
        name: fullName,
        email,
        password,
      };
      let res = await fetch(`https://quick-cows-shake.loca.lt/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate("Login");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginLink}>
        <Text style={styles.loginLinkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196f3",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 16,
  },
  loginLinkText: {
    color: "#2196f3",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
