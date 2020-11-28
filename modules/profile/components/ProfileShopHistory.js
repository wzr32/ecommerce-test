import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import { history } from "../history-model";

const ProfileShopHistory = () => {
  return (
    <View>
      <Text style={styles.title}>Historial de compra</Text>
      <View style={styles.historyCard}>

        <FlatList 
          data={history}
          keyExtractor={history => String(history.id)}
          renderItem={ ({item}) => (
            <View style={styles.outterCard}>
              <Text style={styles.individualTitle}>Tienda: {item.store}</Text>

              <FlatList 
                data={item.products}
                keyExtractor={ (products) => String(products.id) }
                renderItem={ ({item}) => (
                  <View style={styles.innerCard}>
                    <Text>Producto: {item.name}</Text>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>Precio: {item.price}</Text>
                  </View>
                )}
              />

              <Text style={styles.individualTotal}>Total: {item.total}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default ProfileShopHistory

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 5
  },
  historyCard: {
    height: "82%"
  },
  outterCard: {
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 25

  },
  innerCard: {
    backgroundColor: "#c6c6c6",
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 10,
    marginVertical: 5 
  },
  individualTotal: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  individualTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center"
  }
})
