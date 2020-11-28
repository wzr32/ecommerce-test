import React from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native'

const HomeHeroBanner = () => {
  return (
    <View style={styles.heroBanner}>
      <Image
        style={styles.heroBannerImg}
        source={require('../../../shared/assets/banner-1.png')}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search by product"
        textAlign="center"
      />
    </View>
  )
}

export default HomeHeroBanner

const styles = StyleSheet.create({
  heroBanner: {
    alignItems: "center",
    position: "relative",
    height: 250,
    backgroundColor: "red",
    justifyContent: "flex-end"
  },
  heroBannerImg: {
    position: "absolute",
    resizeMode: "contain",
    height: "100%"
  },
  searchInput: {
    backgroundColor: "#efefef",
    borderRadius: 50,
    width: "75%",
    marginBottom: 30
  },
})
