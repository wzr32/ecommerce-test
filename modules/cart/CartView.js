import React, {useState, useEffect} from 'react';

import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  TouchableHighlight 
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { cart } from "./cart-model";
import CartProductList from './components/CartProductList';

const CartView = () => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for(let item of cart) {
      sum += item.price;
      setTotal(sum);
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.icon}>
        <Icon
          name="shoppingcart"
          size={50}
        />
      </View>

      <CartProductList cart={cart}/>
      
      <View
        style={styles.fotter}
      >
        <View>
          <Text>Total: {total}</Text>
        </View>
        <TouchableHighlight
          style={styles.checkoutButton}
        >
          <Text
            style={styles.checkoutButtonText}
          >Pagar</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default CartView

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15
  },
  checkoutButton: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#6c6c6c",
    marginVertical: 10,
    paddingVertical: 15,
    justifyContent: "flex-end"
  },
  checkoutButtonText: {
    color: "#fff",
    textAlign:"center",
    textAlignVertical: "center"
  },

})
