import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
        <Text>66carros</Text>
        <Image source={require('../../assets/images/iconoir_car.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30
    }
})

export default Logo