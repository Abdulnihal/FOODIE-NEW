import React,{ Component } from 'react';

import {View,Text,StyleSheet,Button,TouchableOpacity} from "react-native"
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Entypo';


export default class Location extends Component{
    render() {
        return (

            <View style={styles.container}>
                
            <View style={styles.header}>
           
                <Text  style={styles.headertext}>Location</Text>
            </View>
       
           <View>
      
       </View>




          <View style={styles.searchfield}>
              <Icon style={styles.searchfieldicon} name="zoom" size={15} color='grey'/>
              <TextInput  style={styles.searchfieldtext} placeholder=' Search'  color='#696c73' placeholderTextColor='#696c73'></TextInput>
          </View>
          <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    
  }}
 
/>
<View>
<Text style={styles.bordertext} >(eg.New York, City Garden,etc.)</Text>
</View>

                <View style={styles.body}> 
                    <Icon2 style={styles.lctnicon}name="location-pin" size={20} color='white'/>
                    <Text onPress={() =>
                      this.props.navigation.navigate('Home')
                    } style={styles.lctntext}>Rajapalayam</Text>
                    
                </View>

                <View style={styles.body}> 
                    <Icon2 style={styles.lctnicon}name="location-pin" size={20} color='white' />
                    <Text onPress={() =>this.props.navigation.navigate('Home')} style={styles.lctntext}>Srivilliputtur</Text>
                    
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
        height:'9%',
        flexDirection:'row',
        alignContent:'center'

    },
    headertext:{
    
      fontSize:18,
        color:'#ffffff',
        textAlign:'center',
        padding:130,
    
    
    },
   searchfield:{
       flexDirection:'row',
       alignContent:'space-between',
    
       

   },

searchfieldicon:{
paddingLeft:15,
marginTop:16,

},
searchfieldtext:{
    paddingLeft:20,
    fontSize:15
},

bordertext:{
    color:'#3e3e46',
    fontSize:12,
    paddingTop:10,
    paddingLeft:16
},
    body:{
       flexDirection:'row',
       paddingBottom:18,
       paddingTop:34
    },
    lctnicon:{
   paddingLeft:10
    },

    lctntext:{
        color:'silver',
        paddingLeft:15,
        fontSize:14
    }
}); 