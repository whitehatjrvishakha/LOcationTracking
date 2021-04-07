import React ,{useState}from 'react';
import {View,Text,Button,TextInput,StyleSheet,SafeAreaView,Linking} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Searchbar } from 'react-native-paper';

export default class DestinationScreen extends React.Component{
    myFunction=()=>{
        {Linking.openURL("https://www.google.com/maps")}
       }

      
    render(){
     //2 state var
  //const [fromText,setFromText]=useState("");
  //const [destinationText,setDestinationText]=useState("");

  //default value will be empty string



   
        return(
            <SafeAreaView>
                    <View style={styles.container}>
                        <TextInput
                        value={fromText}
                        onChangeText={setFromText}
                         style={styles.mytextinput}
                          placeholder="From"
                          />
                        <TextInput
                         value={destinationText}
                         onChangeText={setDestinationText}
                         style={styles.mytextinput}
                          placeholder="Destination"/>
                    </View>

                  {/*  <GooglePlacesAutocomplete
                                placeholder='Search'
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                }}
                                query={{
                                    key: 'AIzaSyBlFqbKwZBH2Wt-3Ii4cxuEdZb8U-aLS_c',
                                    language: 'en',
                                }}
                                requestUrl={{
                                    useOnPlatform: 'web', // or "all"
                                    url:
                                     " https://maps.googleapis.com/maps/api." // or any proxy server that hits https://maps.googleapis.com/maps/api
                                  }}
                                />*/}

<Searchbar
      placeholder="Search"
     
    />          
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      padding: 10,
      backgroundColor:"gray",
      height:"100%"
    },
   mytextinput:{
       height:50,
       backgroundColor:"#eee",
       marginVertical:5,

   }
  });