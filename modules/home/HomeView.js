/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeHeader from './components/HomeHeader';
import HomeHeroBanner from './components/HomeHeroBanner';
import HomeProducts from './components/HomeProducts';
import HomePromoBanner from './components/HomePromoBanner';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <HomeHeader />
          <HomeHeroBanner />
          <HomePromoBanner />
          <HomeProducts />
          <HomeProducts />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#efefef"
  },
});

export default App;