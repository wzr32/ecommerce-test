import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const ProfileUserData = () => {
  return (
    <SafeAreaView style={styles.view}>

      <Text style={styles.title}>Datos Personales</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.infoInput}
            value="John"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.infoInput}
            value="Doe"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefono</Text>
          <TextInput
            style={styles.infoInput}
            value="+1 234 567 8900"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Direccion</Text>
          <TextInput
            style={styles.infoInput}
            value="Nw St. NY"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.infoInput}
            value="john@doe.com"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileUserData

const styles = StyleSheet.create({
  view: {
    height: "80%"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 5
  },
  inputContainer: {
    marginVertical: 10
  },
  label: {
    fontWeight: "bold",
    fontSize: 16
  },
  infoInput: {
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
  }
})
