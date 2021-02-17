import React from 'react';
import {View} from 'react-native';
import {Drawer,Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export function NavBarCustom(props) {
  return (
    <View style={{flex: 1,backgroundColor:'#13131a'}}>
      <DrawerContentScrollView {...props}>
      <Drawer.Section style={{margTop:-4,height:120}}>
        <DrawerItem style={{marginLeft:5,}}
          labelStyle={{color:'#65666d',fontSize:15}}
          label="Hey,"/>
        <DrawerItem style={{marginLeft:5,marginTop:-28}}
          labelStyle={{color:'#cececf',fontSize:24}}
          label="teslin"
        />
       <DrawerItem style={{marginLeft:5,marginTop:-25,zIndex:1}}
        label ={()=> (<View><Text style={{color:'#65666d',fontSize:15}}>9294547618   </Text><Ionicons
        name="chevron-forward"  onPress={() => {
          props.navigation.navigate('Profile');
        }} style={{color:'#31930b',marginTop:-18,marginLeft:240,fontSize:20}}/></View>)}
          />
      </Drawer.Section>
      <Drawer.Section style={{marginTop:-4}} >
        <DrawerItem style={{marginLeft:8,marginTop:-10,height:30}}
           labelStyle={{color:'#f6f8fb',fontSize:16}}
           icon={()=>(
            <MaterialCommunityIcons
          name="store"
          size={20}
          color="#31930b"
          />
          )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,marginTop:-16,fontSize:12,height:15}}
          label="List of reastaurants"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-20,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16,marginTop:-15,flexDirection:'column'}}
          icon={() => (
        <MaterialIcons
          name="local-restaurant"
          size={20}
          color="#31930b"
        />)}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          /></Drawer.Section>
          <Drawer.Section style={{marginTop:-35}} >
           <DrawerItem labelStyle={{color:'grey',paddingLeft:53,fontSize:12,height:15}}
          label="Current and past orders"
          onPress={() => {
            props.navigation.navigate('My Orders');
          }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-20,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16}}
          icon={()=>(
            <MaterialCommunityIcons
          name="wallet"
          size={20}
          color="#31930b"
        />
          )}

            label="Wallet"
            onPress={() => {
              props.navigation.navigate('Signin');
            }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-20}} >
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,fontSize:12,height:15}}
          label="User wallet for quick payment"
          onPress={() => {
            props.navigation.navigate('Wallet');
          }}
          />
          </Drawer.Section>
        <Drawer.Section style={{marginTop:-25,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16}}
            icon={()=>(
              <MaterialCommunityIcons
            name="tooltip-account"
            size={20}
            color="#31930b"
          />
            )}
            label="Account"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-20}} >
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,fontSize:12,height:15}}
          label="Profile,Address,Payment into,etc"
          onPress={() => {
            props.navigation.navigate('Account');
          }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-25,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16}}
        icon={()=>(
          <MaterialIcons
        name="chat"
        size={20}
        color="#31930b"
        />
        )}
            label="Support"
            onPress={() => {
              props.navigation.navigate('Support');
            }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-20}} >
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,fontSize:12,height:15}}
          label="Let us know your quaries & Feedbacks"
          onPress={() => {
            props.navigation.navigate('Support');
          }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-25,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16}}
        icon={()=>(
          <MaterialCommunityIcons
        name="gamepad"
        size={20}
        color="#31930b"
        onPress={() => this.setState({drawer: true})}
      />
        )}
            label="IPL Challenge"
            onPress={() => {
              props.navigation.navigate('IPL Challenge');
            }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-6}} >
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,marginTop:-15,fontSize:12,height:15}}
          label="Play and win the ipl challenge"
          onPress={() => {
            props.navigation.navigate('IPL Challenge');
          }}
          />
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-25,height:40}} >
        <DrawerItem labelStyle={{color:'#f6f8fb',fontSize:16}}
        icon={()=>(
          <MaterialCommunityIcons
        name="gamepad"
        size={20}
        color="#31930b"
        onPress={() => this.setState({drawer: true})}
      />
        )}
            label="IPL Challenge Winners"
            onPress={() => {
              props.navigation.navigate('IPL Challenge Winners');
            }}
          /></Drawer.Section>
           <Drawer.Section style={{marginTop:-22}} >
          <DrawerItem labelStyle={{color:'grey',paddingLeft:53,fontSize:12,height:15}}
          label="Ipl Challenge winner list"
          onPress={() => {
            props.navigation.navigate('IPL Challenge Winners');
          }}
          />
      </Drawer.Section>
    </DrawerContentScrollView>
  </View> 
   );
  }  