import React,{ Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image,ScrollView,FlatList} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import DropDownItem from "react-native-drop-down-item";

export default class Cusine extends Component{
  constructor(props){
    super(props);
  this.state = {
    contents: [
      {
        id:'1',
        title: 'Gravy',
        body: 'Hi. I love this component. What do you think?',
      
          name: 'Amy Farha',
          avatar_url: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          subtitle: 'HOW ARE YOU',
          time:'22:02',
      },
      {
        id:'2',
        title: 'Egg',
        body: 'Yes. You can have more items.',
      },
      {
        id:'3',
        title: 'Fried Rice',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };
}
 
  render(){
    return (
        <View style={styles.container}>
        <View style={styles.searchfield}>
        <Icon2 style={styles.searchfieldicon} name='search1' size={16} color='#37af0c' />
         <TextInput style={styles.searchfieldtext} defaultValue='Enter dish name'color='grey'/>
       </View>

       <View style={styles.container}>
        
      </View>
      <FlatList
          data={this.state.contents}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            
              <Text>{item.title}</Text>
             
        
          
               </View>
          )}
        />
       
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