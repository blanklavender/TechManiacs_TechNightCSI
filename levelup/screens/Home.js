import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';

export default function Hello() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.sectionContainer} >
            <Navbar/>

            <View style={styles.sectionbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Calories')} style={styles.cal}>
                    <Text style={styles.calText}>Calories{'\n'}Burned</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                <ImageBackground source={require('../assets/add.png')} style={styles.add}>
                    <Image source={require('../assets/Plus.png')} style={styles.add2} />
                </ImageBackground>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },

    sectiontitle: {
        fontSize: 21,
        color: '#0F2F5B',
        textAlign: 'center',
        fontWeight: '700',
        paddingBottom: 10,
        paddingTop: 10,
        letterSpacing: 1.25
    },
    sectioncode: {
        fontSize: 21,
        color: '#0F2F5B',
        textAlign: 'center',
        fontWeight: '700',
        paddingBottom: 20,
        paddingTop: 30,
        letterSpacing: 1.25
    },
   
    form: {
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: `#c0d1da`,
        borderRadius: 6,
        width: 360,
        marginBottom: 15,
        borderColor: "#BEDCE6",
        borderWidth: 2,
        fontSize: 17,
        paddingHorizontal: 20,
    },
    label: {
        color: '#0F2F5B',
        fontWeight: '600',
        fontSize: 20,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    sectionbutton: {
        alignItems: "center",

    },
    button: {
        backgroundColor: '#c0d1da',
        borderRadius: 6,
        width: 360,
        height: 45,
        marginTop: 25,
        flexDirection: 'row',
    },
    cal: {
        backgroundColor: '#c0d1da',
        borderRadius: 6,
        width: 130,
        height: 55,
        marginTop: 25,
    },
    add: {
        width: 90,
        height: 75,
        marginTop: 25,
        marginHorizontal: 150
    },
    add2: {
        width: 70,
        height: 55,
        marginHorizontal: 10
    },
    buttonText: {
        // textAlign: 'center',
        fontSize: 15,
        color: '#0F2F5B',
        paddingTop: 10,
        fontWeight: '600',
        marginHorizontal: 10,
    },
    calText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#0F2F5B',
        paddingTop: 10,
        fontWeight: '600',
        marginHorizontal: 10,
    },
    icon: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    img: {
        marginHorizontal: 50
    }


});