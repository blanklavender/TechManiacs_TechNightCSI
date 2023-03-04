import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
    TextInput,
    Button,
    Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import EntryModal from './EntryModal';
import Navbar from './Navbar';


export default function Running() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.sectionContainer} >
            <View>
                <Text style={styles.sectiontitle}>Activities</Text>
            </View>

            <View style={styles.modalView}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    Enter Workout details
                </Text>
            </View>

            <View style={styles.timingBox}>
                <Text style={styles.label}>Exercise</Text>
                <TextInput
                style={styles.input}
                placeholder="Ex: Walking..."
                />
            </View>
            
            <View style={styles.timingBox}>
                <Text style={styles.label}>Duration</Text>
                <TextInput
                style={styles.input}
                placeholder="In HH:MM:SS"
                />
            </View>
            
            <View style={styles.difficultyBox}>
                <Text style={styles.label}>Difficulty</Text>

                <Button 
                title="Easy"
                color=""
                style={styles.labelButton}
                onPress= {()=> Alert.alert('Easy Peasy')}
                ></Button>
                <Button 
                title="Medium"
                color=""
                style={styles.labelButton}
                onPress= {()=> Alert.alert('Mediocre')}
                ></Button>
                <Button 
                title="Difficult"
                color=""
                style={styles.labelButton}
                onPress= {()=> Alert.alert('Difficult')}
                ></Button>
            </View>
            

            <Button 
            title="Add Workout!"
            color="#0F2F5B"
            style={styles.modalbutton}
            onPress={()=>setModalVisible(!modalVisible)}>
            </Button>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    fullContainer:{
        justifyItems: 'center',
        flex:1,
        alignItems: 'center',
        
    },

    modalView:{
        flex:1,
        backgroundColor:'#90e0ef',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
          },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 30,
        padding: 25
    },

    titleBox:{
        //flex: 1,
        marginBottom: 40,
    },
    timingBox: {
        //flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    difficultyBox: {
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 70,
    },
    labelButton: {
        display:'flex',
        marginRight: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    label: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 17
    },
    input: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 17,
        paddingLeft: 16,
        paddingRight: 60,
    },
    modalbutton: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        justifyItems: 'center'
    },

    sectionContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },

    sectiontitle: {
        fontSize: 25,
        color: '#0F2F5B',
        textAlign: 'center',
        fontWeight: 'bold',
        //paddingBottom: 30,
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