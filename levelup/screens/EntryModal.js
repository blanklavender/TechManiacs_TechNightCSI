import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    Pressable,
    Button,
    Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';


const EntryModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
        aniamteType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
            Alert.alert('Modal is closed.');
            setModalVisible(!modalVisible);
        }}>
            
        </Modal>
  )
}

export default EntryModal

const styles = StyleSheet.create({
    fullContainer:{
        justifyItems: 'center',
        flex:1,
        alignItems: 'center',
        
    },

    modalView:{
        flex:0.5,
        backgroundColor: '#92A3FD',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
          },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 70,
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    label: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 17,
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
    }
})