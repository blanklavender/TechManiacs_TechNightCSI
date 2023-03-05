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

export default function Meal() {
    const navigation = useNavigation();
        return (

            <View style={styles.body}>
<View>
                
                <Text style={styles.label}>         Meal Schedule</Text>
                <ScrollView style={styles.list}>
                <Image style={styles.img} source={require('../assets/meal.jpg')}/>
                    
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