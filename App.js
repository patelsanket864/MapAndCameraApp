import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigation/AppNavigator';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider} from  'react-redux';
import ReduxThunk from 'redux-thunk'
import place_reducer from './store/place_reducer';
import {init} from './helper/db';

  init()
  .then(()=>{
    console.log('Database initialized');
  })
  .catch(err=>{
    console.log('Database initilization failed');
    console.log(err);
  })
  const combReducers=combineReducers({
    places: place_reducer
  })
  
  const store = createStore(combReducers, applyMiddleware(ReduxThunk));

export default function App() {
  return  <Provider store={store}>
            <AppNavigator />
          </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
