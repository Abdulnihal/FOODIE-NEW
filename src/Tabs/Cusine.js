import React,{ Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
export default class Cusine extends Component{
  render(){
    return (
        <View style={styles.container}>
        <View style={styles.searchfield}>
        <Icon2 style={styles.searchfieldicon} name='search1' size={16} color='#37af0c' />
         <TextInput style={styles.searchfieldtext} defaultValue='Enter dish name'color='grey'/>
       </View>
       </View>
    )
    }
}
const styles = StyleSheet.create({
  text:{
    color:'#37af0c',
    fontSize: 30,
    paddingLeft:8,
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
   },
   searchfield:{
    flexDirection:'row',
    marginLeft:5,
    paddingTop:10,
    paddingBottom:10,
   },
   searchfieldicon:{
    paddingTop:5,
    paddingBottom:5,
    paddingRight:10,
    marginTop:5,
    marginLeft:5,
    },
    searchfieldtext:{
     paddingBottom:5,
     paddingTop:5,
     paddingLeft:5,
    },
});