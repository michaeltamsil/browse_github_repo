import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Login = () => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setUsername}
        placeholder="masukkan nama user akun github"
        style={styles.input}
        value={username}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Masukkan password akun github"
        secureTextEntry={true}
        style={styles.input}
        value={password}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10
  }
})

export default Login;
