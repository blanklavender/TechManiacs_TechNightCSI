import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        
            <Text style={styles.sub_heading}>Welcome back,</Text>
            <Text style={styles.heading}>Fighter!</Text>
        
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