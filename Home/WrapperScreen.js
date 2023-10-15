import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View,Text,StyleSheet} from 'react-native';
import Status from './Status';
import MissedCalls from './MissedCalls';
import Contacts from './Contacts';

 const Tab = createMaterialTopTabNavigator();
 
 
 const WrapperScreen = () =>{
   
   return (
     <>
     <View style={{backgroundColor:"#126949",paddingTop:60,flexDirection:"row" ,justifyContent:"space-between" ,alignItems:""}}>
<Text style={{color:"white" , fontSize:18,fontWeight:"bold",marginLeft:15}}>WhatsApp</Text>
  <Ionicons
              size={25}
              name= 'camera-outline' 
              color= 'white' 
         style={{marginLeft:35}}   />
      <Ionicons
              size={25}
              name= 'search' 
              color= 'white' 
              style={{marginLeft:5}}  
            />
              <Ionicons
              size={25}
              name= 'ellipsis-vertical' 
              color= 'white' 
              style={{marginRight:0}}  
            />
</View>
<Tab.Navigator style={{ paddingTop:0}} screenOptions={{
        tabBarActiveTintColor: '#fdfefd',
        tabBarLabelStyle: { fontSize: 12,color:"#fff",fontWeight:"bold" },
        tabBarStyle: { backgroundColor: '#126949' },
      }}>
      <Tab.Screen
        component={Contacts}
        name='Contacts'
      />
            <Tab.Screen
        component={Status}
        name='Status'
      />
            <Tab.Screen
        component={MissedCalls}
        name='MissedCalls'
      />

</Tab.Navigator>
     
     </>
     );
   
   
 };
 
 export default WrapperScreen;