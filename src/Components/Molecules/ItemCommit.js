import React from "react";
import { Image, Text, View } from "react-native";

const ItemCommit = ({ item }) => {
  console.log(item);
  return(
    <>
      <View style={{flexDirection: "row"}}>
        <View style={{marginVertical:5, width: 50}}>
          <Image
            source={{uri: item && item.author && item.author.avatar_url}}
            style={{
              height: 50,
              width: 50
            }}
          />
          <Text>{item && item.author && item.author.login}</Text>
        </View>
        <View style={{paddingLeft:3}}>
          <Text>{item && item.commit && item.commit.message}</Text>
        </View>
      </View>
      <View style={{borderBottomColor: "black", borderBottomWidth: 1, marginBottom: 10, marginTop: 5}}/>
    </>
  );
}

export default ItemCommit;