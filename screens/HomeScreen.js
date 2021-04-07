import React from 'react';
import {View,Text,Button} from 'react-native';


import HomeMapScreen from '../components/Homemap'
import MessageScreen from '../components/message'
import HomeSearchScreen from '../components/HomeSearch'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                            <HomeMapScreen/>
                            <MessageScreen/>
                            <HomeSearchScreen/>
            </View>
        )
    }
}
