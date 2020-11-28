import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const CartProductList = ({ cart }) => {
  return (
    <FlatList
      data={cart}
      keyExtractor={cart => String(cart.id)}
      renderItem={({ item }) => {
        return (
          <View style={styles.cartCard}>
            <Text style={styles.customDeleteButton}>&times;</Text>
            <Text>Producto: {item.product}</Text>
            <Text>Precio: {item.price}</Text>
            <Text>Cantidad: {item.quantity}</Text>
          </View >
        )
      }}
    />
  )
}

export default CartProductList

const styles = StyleSheet.create({
  view: {
    height: "80%"
  },
  cartCard: {
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    padding: 10,
    marginBottom: 10,
    position: "relative"
  },
  customDeleteButton:{
    margin: 3,
    color: "#fff",
    backgroundColor: "red",
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    top: -5,
    right: -4,
    zIndex: 10
  }
})
