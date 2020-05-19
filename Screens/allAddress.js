import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet,Button,FlatList } from 'react-native';
import {fetchPlace} from '../helper/db';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as placeActions from '../store/place_action';
import PlaceItem from '../Components/PlaceItem';

const AllAddress = props =>{
    
    const titleList = useSelector(state=>state.places.places);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(placeActions.fetchAction());
    },[dispatch]);

    const newAddressHandler = useCallback(()=>{
        props.navigation.navigate('newplace');
    },[]);

    useEffect(()=>{
        props.navigation.setParams({newadd : newAddressHandler});
    },[newAddressHandler]);


    return(
        <FlatList data={titleList} keyExtractor={(item,index)=>item.id} renderItem={itemData=>(
            <PlaceItem image={itemData.item.imguri} title={itemData.item.title} address={null} onSelect={()=>{
                props.navigation.navigate('appDetails',{placeTitle : itemData.item.title, placeId : itemData.item.id})
            }} />
        )} />
    );
}

AllAddress.navigationOptions = navData =>{

    const newAdd= navData.navigation.getParam('newadd');
    return {
        headerTitle : 'All Addresses',
        headerRight : ()=> <HeaderButtons  >
            <View style={{marginRight:10}}> 
            <AntDesign 
                name="plussquare" 
                size={24} color="black" 
                onPress={newAdd}
                />
                </View>
        </HeaderButtons>
    }
}

const styles=StyleSheet.create({
    screen : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default AllAddress;