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
        {key: 1, activity: 'Running', calories: '100 Kcal'},
        {key: 2, activity: 'Walking', calories: '100 Kcal'},
        {key: 3, activity: 'Cycling', calories: '100 Kcal'},
        {key: 4, activity: 'Workout', calories: '100 Kcal'},
        
    ])

    const size = Session.length;

    if (size) {
        return (

            <View style={styles.body}>
<View style={{flexDirection: 'row'}}>
                <Text style={styles.heading}>Hello Fighter!    </Text>
                
          <TouchableOpacity onPress={() => navigation.navigate('Meal')} style={styles.buttonmeal}>
            <Text style={styles.buttonText}>Meal</Text>
          </TouchableOpacity>
        
                </View>
                <Image source={require('../assets/home.png')}/>
                <Text style={styles.label}>Activity Status</Text>
                <ScrollView style={styles.list}>
                    {
                        Session.map((i) => {
                            return (
                                <View style={styles.box} key={i.key}>
                                    <View style={styles.date}>
                                        <Text style={styles.text}>{i.activity}</Text>
                                    </View>
                                    <View style={styles.desc}>
                                        <Text style={styles.text}>{i.calories}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                    <ImageBackground source={require('../assets/add.png')} style={styles.add}>
                        <Image source={require('../assets/Plus.png')} style={styles.add2} />
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>

        )
    }

    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Activities</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                <ImageBackground source={require('../assets/add.png')} style={styles.add}>
                    <Image source={require('../assets/Plus.png')} style={styles.add2} />
                </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.label}>Activity Status</Text>
            <View style={styles.empty}>
                <Text style={styles.subheading}>No Record Of any Activity</Text>
            </View>
            <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Meal')} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
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
    sectionTitle: {
        fontSize: 45,
        fontWeight: '900',
        color: `#0F2F5B`,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      },
    subheading: {
        fontSize: 17,
        color: '#0F2F5B',
        
    },
    text: {
        margin: 5,
        fontSize: 15,
        color: '#0F2F5B',
    },
    list: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40, 
        flexDirection: 'row',
        height: 40,
        flex: 1,
        backgroundColor: '#c8E8E8',
        
        
    },
    date: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    
    empty: {
        backgroundColor: '#c8E8E8',
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
        fontSize: 30,
        paddingTop: 20,
        marginBottom: 30,
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
    buttonmeal:{
        backgroundColor: '#c0d1da',
        borderRadius: 6,
        height: 45,
        width: 66,
        marginTop: 25,
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
        marginHorizontal: 150,
        marginTop: 20
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
        height: 70,
        width: 70,
        marginTop: 10
    }


});