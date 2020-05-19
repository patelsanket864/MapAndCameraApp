import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppList from '../Screens/AppList';
import AppDetail from '../Screens/AppDetail';
import NewAdd from '../Screens/NewAdd';
import AllAddress from '../Screens/allAddress';

const defaultNav={
    headerStyle:{
        backgroundColor: 'yellow'
    },
    headerTintColor : 'blue'
}

const AppNavigator = createStackNavigator({
    allplaces:{
        screen : AllAddress
    },
    newplace:{
        screen : NewAdd,
        navigationOptions:{
            headerTitle:'Add New Address'
        }
    },
    appLists:{
        screen : AppList,
        navigationOptions:{
            headerTitle:'List of addresses'
        }
    },
    appDetails : {
        screen : AppDetail 
    }
})

export default createAppContainer(AppNavigator);