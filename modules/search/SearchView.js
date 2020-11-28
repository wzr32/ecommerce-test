import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const SearchView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput 
          placeholder="Busque por articulo"
          style={styles.searchInput}
        />
        <Icon
          style={styles.searchIcon}
          name="search1"
          size={30}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchView

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15
  },
  searchIcon: {
    marginHorizontal: 5 
  },
  searchInput: {
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    width: "80%"
  }
})
