import React from 'react';
import {View, Text, StyleSheet,Button } from 'react-native';

const Map = props =>{
    return(
        <View style={styles.screen}>
            <Text>Map</Text>
            
        </View>
    );
}

const styles=StyleSheet.create({
    screen : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Map;