import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, SafeAreaView, View } from "react-native";
import ListCommits from "./../Organisms/ListCommits";

const CommitLists = ({ route }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { repositoryName } = route.params;

  const per_page = 10;
  
  useEffect(() => {
    axios.get(`https://api.github.com/repos/${repositoryName}/commits`,{
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "Token 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"
      },
      params: {
        page,
        per_page
      },
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      Alert.alert("Terjadi Kesalahan",error.message)
    });
  },[repositoryName]);

  return(
    <SafeAreaView>
      <View
        style={{
          margin: 18
        }}
      >
        <ListCommits data={data}/>
      </View>
    </SafeAreaView>
  );
}

export default CommitLists;