import React from 'react';
import {View,Text,Button,Card,StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DestinationScreen from './screens/DestinationSearch';

import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component{
  
  
  render(){
      
        return(
            
            
            <View>
           
          <DestinationScreen/>
          
            </View>
            
            
            
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
/*

steps-1)App.js
2-screens
3-components
4-Homemap   ,Message(+style it) , HomeSearch(+style it)
5-Icon-react-native elements(copy from starred link)
6- Icon on where to
7- after styling icons n all conatiners  in homescreen
8-Create DestinationScreen 
9-create 2 input boxes
10-use useState
11then textInput value & onChangeText prop
12- Install lib for google-places autocomplete
13- go to developers account on google
//console.developers.google.com
//https://console.cloud.google.com/home/dashboard?project=booksanta-9f7cd

14-select ur project
15- go to library
16-API & Services  > Type Google Places
17-Select Places API > Press Enable
18-  Go to credentials(left side) > create Credentials >  API Key 
//AIzaSyDgKaEMcSaQUUrEOlsXnW4FdyH4RKa5rdE























*/