import React,{ Component } from 'react';

import {View,Text,StyleSheet,Button,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';


export default class Subscribe extends Component{
    render() {
        return (

            <View style={styles.container}>
                
            <View style={styles.header}>
            <Icon name='navicon' size={26} color='limegreen'onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        }/>
                <Text  style={styles.headertext}>IPL Challenge </Text>
            </View>
            
            <View style={styles.body}></View>
            
            <View style={styles.footer}>
          <Text style={styles.footertext}>No Current Match</Text>
        

          
        </View> 

            
            </View>



        )



    }
}






const styles=StyleSheet.create({
    

    container:{
        width:'100%',
        height:'100%',
          backgroundColor:'#121318',
          
      },

    header:{
        width:'100%',
        alignItems:'center',
        height:'10%',
        flexDirection:'row',
        paddingLeft:10

    },
    headertext:{
    
      fontSize:19,
        color:'#eaeaec',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'space-between',
        padding:68
        
    },
    body:{
        height:'83%',
    },   
    footertext:{
        color:'#ffffff',
        fontSize:18,
        
       
    },
    footer: {
        alignItems: "center",
        backgroundColor: "limegreen",
        padding: 10
      },
});