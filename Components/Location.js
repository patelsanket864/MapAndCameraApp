import React from 'react';
import {View, Text, StyleSheet,Button,Image } from 'react-native';

const Location = props =>{

    const locationHandler=()=>{

    }

    return(
        <View style={styles.location}>
            <View style={styles.locationPreview}>
                <Text>location is not loaded</Text>
                <Image style={styles.image}/>
            </View>
            <Button title="get Location" onPress={locationHandler} />
        </View>
    );
}

const styles=StyleSheet.create({
    location: {
        marginBottom:70,
        height:150,
        width:300,
        alignItems:'center',
        justifyContent:'center'
      },
      locationPreview: {
          height:'100%',
          width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10
      },
      image: {
        width: '100%',
        height: '100%'
      }
})

export default Location;