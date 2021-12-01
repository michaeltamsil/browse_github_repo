import React, { useState } from "react";
import { Button, SafeAreaView, TextInput, Alert } from "react-native";

import styles from "./../../../styles";

const SearchGithub = ({ navigation }) => {
  const [cari, setCari] = useState("facebook/react-native");

  const doCari = () => {
    if (cari !="") {
      navigation.navigate("Daftar Commit",{
        repositoryName: cari
      });
    }else {
      Alert.alert("Peringatan", "Harap memasukkan nama repository yang ingin dicari")
    }
  }

  return(
    <SafeAreaView>
      <TextInput
        onChangeText={setCari}
        placeholder="masukkan nama repository yang ingin dicari"
        style={styles.input}
        value={cari}
      />
      <Button
        onPress={doCari}
        title="Cari"
      />
    </SafeAreaView>
  );
}

export default SearchGithub;