import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen  from './Screens/HomeScreen';
import CallScreen from './Screens/CallScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
          <AppContainer/>
      </View>
    );
  }
  
}

const navigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  CallScreen : CallScreen
});
const AppContainer = createAppContainer(navigator);