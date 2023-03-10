import React, { useState,useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {APIs} from '../config/APIs';
import Utils from '../Utils/utils';

export default function Age() {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  function handleClick() {
    
    const formData = new FormData();
    formData.append('age', age);
    formData.append('gender', gender );
    formData.append('height', height);
    formData.append('weight', weight);

    fetch(APIs.setEntries, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
      
    }).then(async res => {
      navigation.navigate('Home');
      if (res.status >= 200 && res.status < 300) {
        console.log('heee')
        const response = await res.text();
        console.log(response);
        navigation.navigate('Home');
      }
    });
    
  }

  return (
    <ScrollView style={styles.sectionContainer} >
      <Image source={require('../assets/PI.png')} style={styles.image} ></Image>
        <Text style={styles.sectiontitle}>Let's complete your profile</Text>
        <View style={styles.form}>
        <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Years"
          />
        <Text style={styles.label}>Enter Gender</Text>
        <TextInput
            style={styles.input}
            placeholder="Male/Female"
          />

        <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="CM"
          />
        <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="KG"
          />

        </View>

        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={handleClick} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <TextInput></TextInput>
    </ScrollView>

  );

};


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  sectionimage: {
    flex: 1,
  },
  sectiontitle: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
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

  sectionview: {
    paddingBottom: 20,
  },

  form: {
    paddingHorizontal: 10,
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
    paddingBottom: 10
  },


  sectionbutton: {
    alignItems: "center"

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
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 10,
    fontWeight: '600'
  },


});