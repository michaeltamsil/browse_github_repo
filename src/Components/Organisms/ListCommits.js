import React from "react";
import { FlatList } from "react-native";
import ItemCommit from "./../Molecules/ItemCommit";

const ListCommits = ({ data }) => {

  return (
    <FlatList
      data={data}
      renderItem={ItemCommit}
      keyExtractor={item => item.url}
    >
    </FlatList>
  );
}

export default ListCommits;