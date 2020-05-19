import React from 'react';
import {View, Text, StyleSheet, Button, FlatList,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import  PlaceItem from '../Components/PlaceItem';

const AppList = props =>{

    const titleList = useSelector(state=>state.places.places);
    
    return(
        
    <FlatList data={titleList} keyExtractor={(item,index)=>item.id} renderItem={itemData=>(
        <PlaceItem image={itemData.item.imguri} title={itemData.item.title} address={null} onSelect={()=>{
            props.navigation.navigate('appDetails',{placeTitle : itemData.item.title, placeId : itemData.item.id})
        }} />
    )} />


    );
}

const styles=StyleSheet.create({
    screen : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default AppList;