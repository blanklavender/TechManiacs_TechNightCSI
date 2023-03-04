import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Activity() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.sectionContainer} >
            <View>
                <Text style={styles.sectiontitle}>Activities</Text>
            </View>
            <Image source={require('../assets/home.png')} style={styles.img} />
            
            <Text style={styles.label}>Let's Start </Text>
            <View style={styles.sectionbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Running')} style={styles.button}>
                    <Image style={styles.icon} source={require('../assets/run.png')} />
                    <Text style={styles.buttonText}>Running</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Cycling')} style={styles.button}>
                    <Image style={styles.icon} source={require('../assets/Chart.png')} />
                    <Text style={styles.buttonText}>Cycling</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Treadmill')} style={styles.button}>
                    <Image style={styles.icon} source={require('../assets/Treadmill.png')} />
                    <Text style={styles.buttonText}>Treadmill</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Workout')} style={styles.button}>
                    <Image style={styles.icon} source={require('../assets/workout.png')} />
                    <Text style={styles.buttonText}>Workout</Text>
                </TouchableOpacity>
            </View>

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
        paddingBottom: 30,
        paddingTop: 30,
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
    sectionview: {
        paddingBottom: 20,
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
        paddingTop: 20,
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