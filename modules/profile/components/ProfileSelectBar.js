import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const ProfileSelectBar = ({ toggle, setToggle }) => {

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.toggleContainer}>
          <TouchableWithoutFeedback
            onPress={() => setToggle(false)}
          >
            <Text
              style={toggle ? styles.toggleButton : styles.toggleButtonActive}
            >Hitorial de compra</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => setToggle(true)}
          >
            <Text
              style={toggle ? styles.toggleButtonActive : styles.toggleButton}
            >Data del usuario</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileSelectBar

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent:"center",
    marginVertical: 30
  },
  toggleContainer: {
    borderRadius: 6,
    backgroundColor: "#cdcfd4",
    height: 40,
    width: "90%",
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
