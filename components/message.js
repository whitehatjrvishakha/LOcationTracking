import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


export default class MessageScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}>  Travel only if necessary</Text>
            <Text style={styles.text}> message</Text>
            <Text style={styles.lmore}>Learn more</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#543aef",padding:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    title:{
color:"white",
fontSize:15,
fontWeight:"bold",
marginBottom:10
    
    },
    text:{
        color:"#bed9ff",
        fontSize:15,
        marginBottom:15
    },
    lmore:{
        fontSize:15,
        fontWeight:"bold",
        marginBottom:10
    }
  });