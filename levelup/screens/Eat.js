import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';

export default function Eat() {
    const navigation = useNavigation();
    
        useEffect(() => {
          setTimeout(() => {
            navigation.navigate('Pregnant');
          }, 2000)
        }, [])
        return (

            <View style={styles.body}>
<View>
                
                <Text style={styles.label}>Eat Well</Text>
                <Text style={styles.code}>Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun</Text>
                <ScrollView style={styles.list}>
                <Image style={styles.img} source={require('../assets/eat.jpg')}/>
                    
                </ScrollView>
               
            </View>
</View>
        )
    }
    

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        flex: 1
    },
    heading: {
        fontFamily: 'Nats',
        fontSize: 20,
        color: "#000",
        marginHorizontal: 30,
        fontWeight: 'bold',
        marginRight: 80,
        marginTop: 30

    },
    
    label: {
        color: '#0F2F5B',
        fontWeight: '600',
        fontSize: 30,
        paddingTop: 50,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    
    img: {
        //  height: 770,
        
        margin: 30,
        // width: 375,
    }


});