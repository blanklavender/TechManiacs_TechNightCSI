import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.subBox}>
            <Text style={styles.sub_heading}>Welcome back,</Text>
        </View>
        <View style={styles.headBox}>
            <Text style={styles.heading}>Fighter!</Text>
        </View>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        flex:0.15,
        borderColor: '#ADA4A5',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
    box: {

    },
    sub_heading: {
      fontSize: 18,
      color: '#ADA4A5',
      paddingLeft: 25,
      paddingTop: 13,
    },
    heading: {
      fontSize: 24,
      color: '#000',
      paddingLeft: 25,
      paddingTop: 3,
      fontWeight: 'bold'
    }
})