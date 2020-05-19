import React from 'react';
import {View, Text, StyleSheet,Button } from 'react-native';

const AppDetail = props =>{
    return(
        <View style={styles.screen}>
            <Text>{props.navigation.getParam('placeTitle')}</Text>
            <Button title="Click" onPress={()=>{
                props.navigation.pop();
            }} />
        </View>
    );
}

AppDetail.navigationOptions = navData => {
    return{
        headerTitle : navData.navigation.getParam('placeTitle')
    }
}

const styles=StyleSheet.create({
    screen : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default AppDetail;