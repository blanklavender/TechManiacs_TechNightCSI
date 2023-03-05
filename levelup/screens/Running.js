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
    Alert,
    Switch
    
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import EntryModal from './EntryModal';
import Navbar from './Navbar';


export default function Running() {
    const navigation = useNavigation();
    const [calories, setCalories] = useState("");
    const [duration, setDuration] = useState("");

    const calculation = () => {
        setCalories()
    }

    function handleDurationChange(text) {
        setDuration(text);
      }

    const [options, setOptions] = useState({
        difficult: false,
        medium: false,
        easy: false,
      });
      const toggleOption = (option) => {
        setOptions({ ...options, [option]: !options[option] });
      };

    return (
        <SafeAreaView style={styles.sectionContainer} >
            <View>
                <Text style={styles.sectiontitle}>Running</Text>

            </View>

            <View style={styles.titleBox}>
                <Image source={require('../assets/Running.png')} />
                <Text style={styles.title}>
                    Enter details
                </Text>
            </View>
            <View style={styles.form}>
            
            <View >
                <Text style={styles.label}>Duration</Text>
                <TextInput
                    style={styles.input}
                    placeholder="In HH:MM:SS"
                    onChangeText={handleDurationChange}
                />
            </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Difficult</Text>
                <Switch
        value={options.difficult}
        onValueChange={() => toggleOption('difficult')}
      />
      <Text style={styles.label}>Medium</Text>
                <Switch
        value={options.medium}
        onValueChange={() => toggleOption('medium')}
      />
      <Text style={styles.label}>Easy</Text>
                <Switch
        value={options.easy}
        onValueChange={() => toggleOption('easy')}
      />
            </View> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Find calories</Text>
            </TouchableOpacity>

        <TextInput
                style={styles.input}
                placeholder="In HH:MM:SS"
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({



    titleBox: {
        flexDirection: 'row',
        marginVertical: 40,
        marginHorizontal: 60,
    },

    difficultyBox: {
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 70,
        marginHorizontal: 10
    },
    labelButton: {
        backgroundColor: '#6359A6',
        borderRadius: 6,
        width: 360,
        height: 45,
        marginTop: 25,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#6359A6',
        marginHorizontal: 40,
        marginTop: 20
    },

    modalbutton: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        justifyItems: 'center',

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
    sectionContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionimage: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 45,
        fontWeight: '900',
        color: `#0F2F5B`,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingTop: 180,
        paddingBottom: 30,
    },
    sectioncode: {
        fontSize: 21,
        color: '#0F2F5B',
        textAlign: 'center',
        fontWeight: '700',
        paddingBottom: 20,
        paddingTop: 220,
        letterSpacing: 1.25,
    },
    sectionend: {
        flexDirection: 'row',
    },
    endline: {
        fontSize: 17,
        color: '#0F2F5B',
        textAlign: 'center',
        fontWeight: '800',
        paddingBottom: 20,
        paddingTop: 20,
        letterSpacing: 1,
        flex: 1.2,
    },
    link: {
        fontSize: 17,
        color: '#07BB9C',
        fontWeight: '900',
        paddingBottom: 20,
        paddingTop: 20,
        letterSpacing: 1,
        flex: 0.5,
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
        width: 345,
        marginBottom: 15,
        borderColor: '#BEDCE6',
        borderWidth: 2,
        fontSize: 17,
        paddingHorizontal: 10,
        
        
    },

    label: {
        color: '#0F2F5B',
        fontWeight: '600',
        fontSize: 20,
        
    },

    sectionbutton: {
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#6359A6',
        borderRadius: 6,
        width: 360,
        height: 45,
        margin: 10,
        marginTop: 20
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        paddingTop: 10,
        fontWeight: '600',
    },
});
      