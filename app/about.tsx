import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Header from '../src/components/Header'
import HeaderOptions from '../src/services/HeaderOptions'

const About = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => <Header options={[HeaderOptions.LogOut]}/>,
        }}
      />
      <Text>66 CARROS</Text>
      <Text>Versão 1.0</Text>
      <Text>Desenvolvido por RICARDO DIDIMO</Text>
      <Text>Github: https://github.com/ricardodidimo/atv_1_pdm </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default About