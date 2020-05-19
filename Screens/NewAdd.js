import React, { useState,useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { Entypo, AntDesign } from '@expo/vector-icons';
import * as placeActions from '../store/place_action';

import ImgPicker from '../Components/ImagePicker';
import Location from '../Components/Location';

const NewAdd = props =>{

    const dispatch = useDispatch();
    const [newAddress,setNewAddress] = useState();
    const [selectedImage,setSelectedImage]= useState();

    const inputhandler= (address) =>{
        setNewAddress(address)
    }

    const imageHandler = (imgPath) =>{
        setSelectedImage(imgPath);
    }

    const addressHandler = useCallback(()=>{
        dispatch(placeActions.placeTitle(newAddress,selectedImage));
        props.navigation.navigate('appLists');
    },[dispatch,newAddress,selectedImage]);

    useEffect(()=>{
        props.navigation.setParams({addAddress : addressHandler})
    },[addressHandler])

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>

        <View style={styles.screen}>
            <View style={styles.inputcontainer}>
                <View style={styles.components}>
                    <Entypo name="location" size={24} color="black" />
                </View>
                <View style= {styles.components}>
                    <TextInput style={styles.textinput} placeholder="Enter Address" onChangeText={inputhandler} value={newAddress}  />
                </View>
                
            </View>
            <Location />
            <ImgPicker onImageTaken={imageHandler} />
            
        </View>

        </TouchableWithoutFeedback>
    );
}

NewAdd.navigationOptions= navData =>{

    const add = navData.navigation.getParam('addAddress');
    return{
        headerTitle : 'Add new Address',
        headerTintColor : 'black',
        headerStyle : {
            backgroundColor : 'yellow'
        },

        headerRight : ()=> <HeaderButtons  >
            <View style={{marginRight:10}}> 
            <AntDesign 
                name="plussquare" 
                size={24} color="black" 
                onPress={add}
                />
                </View>
        </HeaderButtons>
    }
}

const styles=StyleSheet.create({
    screen : {
        flex:1,
        alignItems:'center',
        marginVertical:50
    },
    inputcontainer:{
        flexDirection: 'row',
        width:'90%',
        height: 100,
        padding:10
    },
    textinput: {
        
    },
    components:{
        padding:5,
    }
})

export default NewAdd;