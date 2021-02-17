import React,{ Component } from 'react';
import{View,TextInput,Text,StyleSheet,ImageBackground,TouchableOpacity,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

export default class Login extends Component{
    render(){
        return(

            <View>
                  <View style={styles.container}></View>
                <View style={styles.header}>
                <ImageBackground source={require("../assets/logo.png")}
                       style={{ width: Dimensions.get('window').width,height:270,opacity:1.9,marginTop:0}}/>
                </View>
                <View style ={styles.body}>
           
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid = "#9d9d9f"
                placeholder="Email Address" 
            
                placeholderTextColor = "#9d9d9f"
                selectionColor="#fff"
                keyboardType="email-address"
                />

<TextInput style={styles.inputBox}
     
 
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid = "#9d9d9f"
                placeholder="Password "
                secureTextEntry={true}
                placeholderTextColor = "#9d9d9f"
                ref={(input) => this.password = input}
                
                
                
                /><View>
   <Text onPress={() =>
                      this.props.navigation.navigate('Forgot')
                    }  style={styles.forgot}>Forgot ? </Text>


</View>
                     <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        
         onPress={() =>
            this.props.navigation.navigate('Signin')
          }  style={styles.button1}>
        
        
          <Text style={styles.buttonText1}>New User?</Text>
        </TouchableOpacity>
                </View>   
            </View>    
            
        )
    }
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:'#111118',
        width:'100%',
        alignItems:'center',
        height:'25%',
        flexDirection:'row',
        justifyContent:'center'   
    },


    body:{
       
        backgroundColor:'#121318',
        height:'100%',
        alignItems:'center',
        width:'100%',

    },

inputBox: {
    width: Dimensions.get('window').width,
    backgroundColor:'#111118',
   
    paddingHorizontal: 16,
   
    fontSize: 15,
    color: '#fff000',
    marginVertical: 12
},
button: {
    width: Dimensions.get('window').width,
    height:50,
    backgroundColor:'#21680c',
    borderRadius: 5,
    marginVertical: 12,
    paddingVertical: 12
},
button1: {
    width: Dimensions.get('window').width,
    height:50,
    backgroundColor: '#282a36',
    borderRadius: 4,
    marginVertical: 15,
    paddingVertical: 12
},
buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6f836b',
    textAlign: 'center'
},

forgot:{
fontSize:15,
fontWeight: '500',
color: '#2dab03',
marginLeft:260,
marginTop:-45
},




buttonText1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2dab03',
    textAlign: 'center'
},



   
    }
    
   
);