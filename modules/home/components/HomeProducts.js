import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import { products } from "../product-model";

const HomeProducts = () => {
  return (
    <>
      <FlatList
        style={styles.FlatList}
        data={products}
        horizontal
        keyExtractor={(products) => String(products.id)}
        renderItem={ ({item}) => (
          <View style={styles.categoryCard}>
            <Image 
              style={styles.categoryImg}
              source={require(`../../../shared/assets/products/product-1.jpg`)}
            />
            <Text
              style={styles.categoryText}
            >{item.category}</Text>
          </View>
        )}
      />
    </>
  )
}

export default HomeProducts

const styles = StyleSheet.create({
  FlatList: {
    marginVertical: 20,

  },
  categoryCard: {
    height: 130,
    width: 100,
    paddingHorizontal: 6,
    paddingVertical: 2,
    margin: 10,
  },
  categoryImg: {
    width: "100%",
    height: 90,
    resizeMode: "contain"
  },
  categoryText: {
    textAlign: "center"
  },
})
