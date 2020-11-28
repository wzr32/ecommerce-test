import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          source={ require('../../../shared/assets/logo.png')}
          style={styles.logo}
        />
      </View> 
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 120,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  container: {
    height: 65,
    margin: 15
  },
  logo: {
    flex: 1,
    resizeMode: 'contain'
  }
})
