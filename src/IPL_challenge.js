import React,{ Component } from 'react';

import {View,Text,StyleSheet,Button,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';



export default class IPL_challenge extends Component{
    render() {
        return (

            <View style={styles.container}>
                
            <View style={styles.header}>
            <Icon name='navicon' size={30} color='lime' padding='30' onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        } />
                <Text  style={styles.headertext}>Foodie IPL Challenge</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodytext}>     1.  Predict your score for upcoming over
                {"\n\n"}     2.  Enter your predict score.
                {"\n\n"}     3.  If your predict score is matched.
                {"\n\n"}     4.  You are the winner.
                {"\n\n"}     5.  You win 5rs.


                
                
            </Text>

            <Text style={styles.bodytext2}>
            {"\n"}    Note*
            </Text>

            <Text style={styles.bodytext3}>
            {"\n"}    *If any cases issues or debug occured, final 
            {"\n"}      decision will be made by foodie

            {"\n\n"}     By clicking subscribe you are agree with 
            {"\n"}     foodie terms and conditionss
            </Text>


            </View>
            


            <View >

            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Subscribe')}
          style={styles.button}
           
        >
          <Text style={styles.buttontext}>Subscribe</Text>
        
        </TouchableOpacity>

          
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
    
      fontSize:21,
        color:'#eaeaec',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'space-between',
        padding:45
        
    },
    body:{
     height:'82%',
     
    },
    bodytext:{
        marginTop:20,
        color:'#eaeaec'
    },
    bodytext2:{
        
        color:'#eaeaec',
        fontSize:20
    },
    bodytext3:{
        
        color:'#eaeaec'
    },
    buttontext:{
        color:'#ffffff',
        fontSize:20,
       
    },
    button: {
        alignItems: "center",
        backgroundColor: "limegreen",
        padding: 10
      },
    
});  

  
