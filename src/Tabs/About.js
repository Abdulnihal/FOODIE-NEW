import React, { Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details:[
        
        {
          id:'1',
          name: 'Opening Hours',
          subtitle: '11:00:AM - 09:00:PM'
        },
        {
          id:'2',
          name: 'Delivery time',
          subtitle: '1min. 20 - 25 mins'
        },
        {
          id:'3',
          name: 'Address',
          subtitle: 'PSR road, Sivakasi'
        },
      ]
    };
  }
  renderItem = ({item}) => {
    
    return (
<View style={styles.row}>
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{item.name}</Text>
      </View>
      <View style={styles.end}>
       
        <Text style={styles.time}>{item.subtitle} </Text>
      </View>
    </View>
    </View>
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }
      } >
        
        <FlatList 
          extraData={this.state}
          data={this.state.details}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  


  }
  



}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
  },

  viewstyle:{
   height:140,
   borderRadius:10,
   borderWidth:1,
   marginLeft:10,
   marginRight:10,
  },
  
  viewstylecontent:{
   flexDirection:'row',
   backgroundColor:'#282a36',
   borderBottomWidth:1,
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
   marginLeft:11,
   marginRight:11,
   marginTop:-1,
   paddingTop:5,
   paddingLeft:5,
   height:50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: 'black',
    padding:10
  },

  nameContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    width:250
  },
  nameTxt: {
    marginLeft:('3%'),
    fontWeight: '600',
    color: 'white',
    fontSize: 17,

  },
  mblTxt: {
    marginLeft:('3%'),
    fontWeight: '200',
    color: '#777',
    fontSize: 15,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft:('3%'),
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
    //marginLeft:hp('3%'),

  },
});
module.exports = About