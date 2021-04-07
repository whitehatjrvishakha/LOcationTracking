import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'


export default class HomeSearchScreen extends React.Component{
    render(){
        return(
            <View>
                        <View style={styles.forinputbox}>
                        
                        <Text style={styles.inputtext} >Where to</Text>
                        <View style={styles.timecontainer}>
                          <AntDesign name={"clockcircle"} size={16} />
                              <Text> Now</Text>
                                    <MaterialIcons name={"keyboard-arrow-down"} size={16}/>
                              
                        </View>
                        </View>
                        {/*  previous destination */}
                        <View style={styles.row}>
                             <View style={[styles.iconcontainer,{backgroundColor:"#e213ad"}]}>
                             <AntDesign name={"clockcircle"} size={16} />
                             </View>

                           
                              <Text style={styles.destinationText}>  Spin a NightClub  </Text>
                            
                        </View>

                        <View style={styles.row}>
                             <View style={[styles.iconcontainer,{backgroundColor:"#218cff"}]}>
                             <Entypo name={"home"} size={20} />
                             </View>

                           
                              <Text style={styles.destinationText}> Home  </Text>
                            
                        </View>
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
 forinputbox: {
   backgroundColor:"#b0b0b0",
      margin: 9,
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:"center",
      padding:8,
      borderRadius:20
    },
    inputtext:{
fontSize:20,
fontWeight:'600',
color:"#fff"
    },
timecontainer:{
  flexDirection:'row',
  justifyContent:"space-between",
  width:80,
  padding:10,
  backgroundColor:"#fff",
  borderRadius:30
},
row:{
 flexDirection:"row",
 alignItems:"center",
 padding:15,
 borderBottomWidth:1,
 borderColor:"#dbdbdb"
},
iconcontainer:{
backgroundColor:"#b7b7b7b",
padding:10,
borderRadius:5

},
destinationText:{
marginLeft:10,
fontWeight:"bold",
fontSize:17
}
  });
  
