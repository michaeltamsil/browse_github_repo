import React, { useState } from "react";
import axios from 'axios';
import { Alert, Button, SafeAreaView, StyleSheet, TextInput  } from "react-native";




const Login = () => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const doLogin = () => {
    axios.get('https://api.github.com/user',{
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'Token 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',
      }
    })
    .then(response => {
      console.log(response);
      debugger;
    })
    .catch(error => {
      Alert.alert(
        'Terjadi Kesalahan',
        error.message
      )
    })
  }
  
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
      <Button
        onPress={() => {
          doLogin();
        }}
        style={styles.input}
        title="Masuk"
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
