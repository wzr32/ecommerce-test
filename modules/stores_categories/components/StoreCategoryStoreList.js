import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { stores } from "../store-model";

const StoreCategoryStoreList = () => {
  return (
    <FlatList
      style={styles.FlatListStore}
      data={stores}
      keyExtractor={stores => stores.name}
      renderItem={({ item }) => (
        <View style={styles.storeCard}>
          <Image
            style={styles.top}
            source={require("../../../shared/assets/stores/Apple.jpg")}
          />
          <View style={styles.bottom}>
            <View style={styles.container}>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.storeRating}>{item.rating}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.storeAddress}>{item.address}</Text>
              <Text style={styles.storeLink}>Visitar tienda</Text>
            </View>
          </View>
        </View>
      )}
    />
  )
}

export default StoreCategoryStoreList

const styles = StyleSheet.create({
  FlatListStore: {
    paddingHorizontal: 10 
  },
  storeCard: {
    marginVertical: 10,
    borderColor: "#e6e6e6",
    borderStyle: "solid",
    borderWidth: 1
  },
  top: {
    width: "100%",
    resizeMode: "stretch"
  },
  bottom: {
    padding: 10
  },
  container: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  storeName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#536f7a"
  },
  storeLink: {
    color: "#ff4b8e",
  },
})
