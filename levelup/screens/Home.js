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

export default function Home() {
    const navigation = useNavigation();


    const [Session, setSession] = useState([
        {key: 1, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 2, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 3, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 4, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 5, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 6, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 7, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 8, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
        {key: 9, date: '11oct', desc: 'Lorem ipsum dolor sit amet. Aut repellen dus ipsa ab ipsa animi qui exercitationem magni est animi.', time: '01.10.00' },
    ])

    const size = Session.length;

    if (size) {
        return (
            <View style={styles.body}>
            <Text style={styles.heading}>Activities</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                <ImageBackground source={require('../assets/add.png')} style={styles.add}>
                   <Image source={require('../assets/Plus.png')} style={styles.add2} />
                 </ImageBackground>
           </TouchableOpacity>
                
                <Text style={styles.label}>Activity Status</Text>
                <ScrollView style={styles.list}>
                    {
                        Session.map((i)=>{
                            return(
                                <View style={styles.box} key={i.key}>
                                    <View style={styles.date}>
                                        <Text style={styles.text}>{i.date}</Text>
                                    </View>
                                    <View style={styles.desc}>
                                        <Text style={styles.text}>{i.desc}</Text>
                                    </View>
                                    <View style={styles.time}>
                                        <Text style={styles.text}>{i.time}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    return(
        <View style={styles.body}>
            <Text style={styles.heading}>Activities</Text>
            <Text style={styles.label}>Activity Status</Text>
            <View style={styles.empty}>
                <Text style={styles.subheading}>No Sessions</Text>
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
        fontSize: 25,
        color: "#000",
        margin: 50,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 17
    },
    text: {
        margin: 5,
        fontSize: 13,
        color: '#0F2F5B',
    },
    list: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
        flexDirection: 'row',
        height: 90,
        flex: 1,
    },
    date: {
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        height: '100%',
        width: '68%',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    time: {
        height: '100%',
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    empty: {
        backgroundColor: '#E8E8E8',
        width: '90%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },



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