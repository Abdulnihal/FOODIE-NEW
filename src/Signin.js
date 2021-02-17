import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

 
export default class Signin extends Component {
 
    
    
  render() {
        return(
            <View style={styles.container}>


<Icons name='chevron-left' size={30} color='#37af0c'onPress={() =>
                      this.props.navigation.navigate('homescreen')
                    }  style={styles.icon}/>
          


                 <Text style={styles.Newuser}>New User?</Text>



                <TextInput style={styles.inputBox}
            
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid = "#9d9d9f"
                placeholder="Full Name" 
                placeholderTextColor = "#9d9d9f"
                selectionColor="#fff"
                keyboardType="email-address"
                
                />

<TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})} 
                underlineColorAndroid = "#9d9d9f"
                placeholder="Email Address"
              
                placeholderTextColor = "#9d9d9f"
                ref={(input) => this.password = input}
                />






<TextInput style={styles.inputBox}
                onChangeText={(phone) => this.setState({phone})} 
                underlineColorAndroid = "#9d9d9f"
                
                placeholder="Phone Number"
                
                placeholderTextColor = "#9d9d9f"
                ref={(input) => this.password = input}
                />
                
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                
                underlineColorAndroid = "#9d9d9f"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#9d9d9f"
                ref={(input) => this.password = input}
                />
 
 <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register Now</Text>
        </TouchableOpacity>
        
        
            </View>
            
            );
        
    }
    
}

 
const styles = StyleSheet.create({
    container: {
        
      height:'100%',
      width:'100%',
      backgroundColor:'black',
      textAlign: 'center',
     

    },
    inputBox: {
        width: Dimensions.get('window').width,
        backgroundColor: '#000', 
        paddingHorizontal:25,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10,
        marginTop:14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        width: Dimensions.get('window').width,
        height:50,
        left:15,
        backgroundColor:'#21680c',
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 12,
        padding:100,
     

    },
  
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: "#9d9d9f",
        textAlign: 'center'
    },
    Newuser: {
        fontSize: 24,
        marginTop:-35,
        marginLeft:18,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical:10,
        paddingHorizontal:35
        
    },
    icon:{
        
        marginTop:35,
        marginLeft:15,
        marginBottom:6
 
        
    }
  
}
);