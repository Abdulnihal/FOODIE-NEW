import React, { Component,useState } from 'react';

import {Text,StyleSheet, View,TextInput,Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import Hotels from "./About";
import Sweets from "./Cusine";
import Own from "./Reviews";
import Cusine from './Cusine';
import Reviews from './Reviews';
import About from './About';
export default class Hoteldetails extends Component 
 {

    render() {

        return (
          <View style={styles.container}>
           <View style={styles.viewstyle}>
             <View style={styles.imagebody}>
              <Image source={require('../Images/porotta.png')}
               style={{width: '100%', height: 170}}/>
               <View style={styles.rate}>
                 <Text style={styles.text1}>0.0</Text>
               </View>
               <View style={styles.resname}>
               <Icon1 style={styles.cart} name='shopping-cart' size={15} color='white'/>
                 <Text style={styles.text3}>Sahana</Text>
                 <Text style={styles.text2}>Veg & Nonveg</Text>
               </View>
             </View>
           </View>
           <View style={styles.viewstylecontent}>
           <Text style={styles.baseText}>mins</Text>
           <Text style={styles.baseText1}>11:30:AM</Text>  
           <Text style={styles.baseText2}>10:00:PM</Text>      
           
           </View>
           <View style={styles.viewstylecontent1}>
           <Text style={styles.bottom}>Avg delivery time</Text> 
           <Text style={styles.bottom1}>Openning time </Text>    
           <Text style={styles.bottom2}>Closing Time </Text>              
           </View>
           <ScrollableTabView
      //tabBarUnderlineColor="#37af0c"
      tabBarUnderlineStyle={{backgroundColor: "#37af0c"}}
      //tabBarBackgroundColor ="#232d36"
      tabBarActiveTextColor="#37af0c"
      tabBarInactiveTextColor='grey'
      >
      
       <Cusine tabLabel="Cusine" {...this.props} />
       <Reviews tabLabel="Reviews(0)" {...this.props} />
       <About tabLabel="About" {...this.props} />
     </ScrollableTabView>
         </View>
         
        )
      }
    }
    
    const styles = StyleSheet.create({
      container:{
        height:'100%',
        width:'100%',
        backgroundColor:'black',
      },
      header:{
        flexDirection: 'row',
        marginBottom:5,
        marginTop:5,
        paddingBottom:5,
        height:40,
        paddingTop:5,
      },
      place:{
        color:'white',
        marginLeft:10,
        width:250,
      },
      cart:{
        marginLeft:25,
        flex:1,
      },
      body:{
        height:80,
      },
      text:{
        color:'#37af0c',
        fontSize: 30,
        paddingLeft:8,
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
      near:{
        color:'#4a4b50',
        fontSize:18,
        paddingLeft:8,
      },
      viewstyle:{
       height:140,
       borderRadius:10,
       borderWidth:1,
       marginLeft:10,
       marginRight:10,
      },
      imagebody:{
        flex:1,
        borderTopWidth:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden',
        opacity:0.7,
        height:140,
      },
      rate:{
        position:'absolute',
        backgroundColor:'lime',
        height:20,
        width:30,
        right:1,
        borderRadius:10,
        paddingLeft:6,
        marginRight:8,
        marginTop:110,
       },
       text1:{
        color:'white',
        fontSize:12,
      },
      resname:{
        position:'absolute',
        color:'white',
        marginTop:125,
        marginLeft:10,
    
      },
      text2:{
        color:'white',
        fontSize:10,
      },
      text3:{
        color:'white',
        fontSize:20,
      },
      viewstylecontent:{
       flexDirection:'row',
<<<<<<< HEAD
       justifyContent:'space-around',
       backgroundColor:'#282a36',
       borderBottomWidth:1,
       borderBottomLeftRadius:10,
       borderBottomRightRadius:10,
=======
       //backgroundColor:'#282a36',
       //borderBottomWidth:1,
       //borderBottomLeftRadius:10,
       //borderBottomRightRadius:10,
>>>>>>> dcfb60f2b25fe8069e5627edf8973f4439a83257
       marginLeft:11,
       marginRight:11,
       marginTop:-1,
       paddingTop:5,
       paddingLeft:5,
       height:50,
       padding:25
      },
      baseText:{
        color:'white',
        fontSize:12,
       },
       baseText1:{
         color:'white',
         fontSize:12,
         paddingLeft:60,
        },
        baseText2:{
         color:'white',
         fontSize:12,
         paddingLeft:50,
        },
        baseText3:{
         color:'#37af0c',
         fontSize:12,
         paddingLeft:50,
        },
        viewstylecontent1:{
        justifyContent:'space-around',
        flexDirection:'row',
        marginLeft:11,
        marginRight:11,
        marginTop:-45,
        paddingTop:15,
        paddingLeft:5,
        },
        bottom:{
        color:'grey', 
        fontSize:10,
        paddingTop:5,
        },
        bottom1:{
        color:'grey', 
        fontSize:10,
        paddingTop:5,
        paddingLeft:10,
        },
        bottom2:{
        color:'grey', 
        fontSize:10,
        paddingTop:5,
        paddingLeft:35,
        },
        bottom3:{
        color:'grey', 
        fontSize:10,
        paddingTop:5,
        paddingLeft:40,
       },
       cart:{
        marginLeft:350,
        marginTop:-125,
        flex:1,
      },
      });
 
    module.exports =Hoteldetails