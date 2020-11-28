import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const HomePromoBanner = () => {
  return (
    <View style={styles.promoBanner}>
      <Image
        style={styles.promoBannerImg}
        source={ require('../../../shared/assets/banner-2.png')}
      />
    </View>
  )
}

export default HomePromoBanner

const styles = StyleSheet.create({
  promoBanner: {
    padding: 10,
    alignItems: "center"
  },
  promoBannerImg: {
    resizeMode: "contain"
  }
})
