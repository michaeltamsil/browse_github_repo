import React, { useState } from "react";
import { Alert, Button, SafeAreaView, TextInput  } from "react-native";

import styles from "./../../../styles";

const Login = ({ navigation }) => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const doLogin = () => {
    if (username != "" && password != ""){
      navigation.navigate("Pencarian Github");
    } else {
      Alert.alert("Peringatan", "harap mengisi nama user akun dan password");
    }
    
    // axios.get('https://api.github.com/user',{
    //   headers: {
    //     'Accept': 'application/vnd.github.v3+json',
    //     'Authorization': 'Token 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',
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    //   debugger;
    // })
    // .catch(error => {
    //   Alert.alert(
    //     'Terjadi Kesalahan',
    //     error.message
    //   )
    // })
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
        onPress={doLogin}
        title="Masuk"
      />
    </SafeAreaView>
  );
}

export default Login;
