import React,{ Component } from 'react';
import{View,Image,StyleSheet} from "react-native";


export default class Splashscreen extends Component{
  render(){
      return(
      <View style={styles.container}>
        <Image  source={require('./Images/Fd.jpg')}
         style={{ width: 320, height: 500 }}
        ></Image>
      </View>
    
      )
    }
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    }
  });