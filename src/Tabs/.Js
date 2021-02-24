import React,{ Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import DropDownItem from "react-native-drop-down-item";

export default class Cusine extends Component{
  constructor(props) {
    super(props);
  this.state = {
    details:[
      {
        id:'1',
        name: 'Amy Farha',
        avatar_url: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        subtitle: 'HOW ARE YOU',
        time:'22:02',

      }]}}
  renderItem = ({item}) => {


    return (
      <View>
              <Text>{item.name}</Text>
              </View>
    )
  }
 
  render(){
    return (
        <View style={styles.container}>
        <View style={styles.searchfield}>
        <Icon2 style={styles.searchfieldicon} name='search1' size={16} color='#37af0c' />
         <TextInput style={styles.searchfieldtext} defaultValue='Enter dish name'color='grey'/>
       </View>
       <DropDownItem
          extraData={this.state}
          data={this.state.details}
          header={
            <View>
          <Text>{this.state.details.name}</Text>
          </View>
          }
          key = {(item) => {
            return item.id;
            
          }}
          renderItem={this.renderItem}>
            </DropDownItem>
       </View>
    )
    }
}
const styles = StyleSheet.create({
  text:{
    color:'#37af0c',
    fontSize: 30,
    paddingLeft:8,
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
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
});