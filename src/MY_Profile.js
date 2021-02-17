import React,{ Component } from 'react';
import{View,TextInput,Text,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';

export default class MY_Profile extends Component{
    render(){
        return(


            <View style={styles.screen}>
                <View style={styles.header}>
                <Icon style={styles.headericon} name='navicon' size={25} color='lime'  onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        }/>
                <Text style={styles.headertext}>My Profile </Text>
                <Text style={styles.headertextl}>Logout</Text>
                </View>
                <View style ={styles.body}>
                <Icons style={styles.personicon }name="perm-contact-cal" size={18} color='lime'/>
                <Text style={styles.bodytext}>Personal Details</Text>
                <Text  style={styles.textname}>Name</Text>
                <Text  style={styles.textnamea}>Athira</Text>
                <View style={styles.line} />
                <Text  style={styles.textemail}>Email</Text>
                <Text  style={styles.textemaile}>techknocksathira@gmail.com</Text>
                <View style={styles.lineemail} />
                <Text  style={styles.number}>Mobile Number </Text>
                <Text  style={styles.textnumber}>8304027423</Text>
                <View style={styles.linenumber} />
                </View>   
            </View>    
            
        )
    }
}
const styles=StyleSheet.create({
    screen:{
        backgroundColor:'#000000',
        width:'100%',
        height:'100%'

    },
    header:{
        backgroundColor:'#111118',
        width:'100%',
        alignItems:'center',
        height:'20%',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:-40
        
        
    },
    headericon:{
        flex:2,
        paddingLeft:15,

    },
    headertext:{
        fontSize:18,
        color:'#f5fffa',
        padding:60,
        flex:2.7
    
    },
    headertextl:{
        color:'#00ff00',
        fontSize:18,
        flex:2
        
       
        
    },
    body:{
       
        backgroundColor:'#111118',
        marginTop:-20
        

    },
    personicon:{
        
        marginTop:25,
        marginLeft:15,
        marginBottom:6

    },
    
    bodytext:{
        color:'#f5fffa',
        fontSize:16,
        marginTop:-30,
        marginLeft:50,
        marginBottom:10,
        
        
    },
    textname:{
    
        color:'#808080',
        fontSize:11,
        marginTop:1,
        marginLeft:50,
        marginBottom:10,
    },
    textnamea:{
        color:'#f5fffa',
        fontSize:14,
        marginTop:-10,
        marginLeft:50,
        marginBottom:10,

    },
    line:{
        borderBottomColor:'#f5fffa',
        borderBottomWidth:1,
        borderBottomLeftRadius:20,
        marginLeft:50,
        marginRight:10
    },
    textemail:{
    
        color:'#808080',
        fontSize:11,
        marginTop:30,
        marginLeft:50,
        marginBottom:34,
    },
    textemaile:{
        color:'#f5fffa',
        fontSize:14,
        marginTop:-35,
        marginLeft:50,
        marginBottom:20,

    },
    lineemail:{
        borderBottomColor:'#f5fffa',
        borderBottomWidth:1,
        borderBottomLeftRadius:20,
        marginLeft:50,
        marginRight:10,
        marginTop:-10
    },

    number:{
    
        color:'#808080',
        fontSize:12,
        marginTop:20,
        marginLeft:50,
        marginBottom:30,
    },
    textnumber:{
        color:'#f5fffa',
        fontSize:14,
        marginTop:-30,
        marginLeft:50,
        marginBottom:30,

    },
    linenumber:{
        borderBottomColor:'#f5fffa',
        borderBottomWidth:1,
        borderBottomLeftRadius:20,
        marginLeft:50,
        marginRight:10,
        marginTop:-19,
        marginBottom:40
    }
    
   
});