import React,{ Component } from 'react';
import{View,StyleSheet,Text} from "react-native";
export default class Myorders extends Component{
  render(){
      return(
      <View >
        
        <Text style={styles.text}>Discover new  </Text>
      </View>
    
      )
    }
}
const styles = StyleSheet.create({
  text:{
    color:'#37af0c',
    fontSize: 30,
    paddingLeft:8,
  }
});