import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native'

const StoreCategoriesSearch = () => {
  
  const [toggle, setToggle] = useState(false);
  
  return (
    <View style={styles.main}>
      <View style={styles.toggleContainer}>
        <TouchableWithoutFeedback
          onPress={() => setToggle(false)}
        >
          <Text 
            style={toggle ? styles.toggleButton : styles.toggleButtonActive }
          >Tienda</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => setToggle(true)}
        >
          <Text 
            style={toggle ? styles.toggleButtonActive : styles.toggleButton }
          >Categorias</Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por articulos"
        />
      </View>
    </View>
  )
}

export default StoreCategoriesSearch

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#f1f2f4",
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: "26%"
  },
  toggleContainer: {
    borderRadius: 6,
    backgroundColor: "#cdcfd4",
    height: 40,
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  toggleButton: {
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#cdcfd4",
    height: "90%",
    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#cdcfd4",
    height: "90%",
    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
  },
})
