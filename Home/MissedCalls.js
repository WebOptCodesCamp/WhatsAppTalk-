import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
import moment from 'moment';

const MissedCalls = () => {
  const [calllogs , setCalllogs]= useState([]);
  
 const lastcalls = [
    {'name': 'John Doe', 'phone_number': '123-456-7890', 'last_call': '2022-01-01'},
    {'name': 'Jane Smith', 'phone_number': '987-654-3210', 'last_call': '2022-01-02'},
    {'name': 'Alice Johnson', 'phone_number': '555-123-4567', 'last_call': '2022-01-03'},
    {'name': 'Bob Williams', 'phone_number': '888-999-0000', 'last_call': '2022-01-04'},
    {'name': 'Emma Davis', 'phone_number': '111-222-3333', 'last_call': '2022-01-05'},
    {'name': 'Michael Brown', 'phone_number': '444-555-6666', 'last_call': '2022-01-06'}
];
useEffect(()=>{
  
  
  
    
  
});

const date  =  '2023-09-12' ;
const timeago = moment(date).fromNow();

  const navigation = useNavigation();
   
  return (
    <SafeAreaView style={{width:"100%" , height:"100%", backgroundColor:"#d5e0d5fa"}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:6}}>
    <MaterialIcons name="filter-list-alt" size={21} color="#c6139bfa" style={{marginLeft:6}}/>
   <Text style={{textAlign:"center" ,fontWeight:"bold" ,fontSize:15,fontStyle:"italic"}}>Last and MissedCalls</Text>
   <MaterialIcons name="settings" size={24} color="#b0280afa" style={{marginRight:6}}/>
   </View>
</SafeAreaView>
    
    );
};

export default MissedCalls;
