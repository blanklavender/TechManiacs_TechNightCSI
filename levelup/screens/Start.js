import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

  export default function Start(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
        <ImageBackground source={require('../assets/start.png')} style ={styles.sectionimage}>
          <Text style={styles.sectionTitle} >LEVEL{'\n'}   UP</Text>
        </ImageBackground>
         <View style={styles.sectionview}>
          
         </View>
            <View style ={styles.sectionbutton}>
            <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Register')}style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            
                </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     backgroundColor: '#fff',
     flex: 1,
   },
   sectionTitle: {
     fontSize: 40,
     fontWeight: '900',
     color: `#6359A6`,
     fontStyle: 'italic',
     margin: 20
     
   },
   sectioncode: {
     fontSize: 15,
     color: '#ffffff',
     textAlign: 'center',
     fontWeight: '500'
   },
   sectionview: {
       paddingBottom: 50,
   },
 
   sectionbutton: {
    alignItems: "center",
    marginTop: 60,
  },
 
   button: { 
    backgroundColor: '#6359A6',
    borderRadius: 6,
    width: 360,
    height: 45,
    marginTop: 25,
    
},
 
   buttonText: {
     textAlign: 'center',
     fontSize: 22,
     color: '#ffffff',
     paddingTop: 8,
     fontWeight: '600'
   },
 
   sectionimage: {
    height: 440,
    width: 400,
   },
     
 });