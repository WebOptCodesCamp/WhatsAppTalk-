import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  PermissionsAndroid,
} from 'react-native';

import {Voximplant} from 'react-native-voximplant';


const Contacts = () => {
  const Users = [{
  "name":"yangesh Sharma",
  "display-name":"yangesh Sharma",
  "src": require("../Assets/megan.png"),
},
{
  "name":"james Kennedy",
  "display-name":"yangesh Sharma",
  "src": require("../Assets/peter.png"),
},
{
  "name":"Olivia Thambo",
  "display-name":"yangesh Sharma",
  "src": require("../Assets/ali.png"),
},
{
  "name":"mary Sharma",
  "display-name":"yangesh Sharma",
  "src": require("../Assets/mary.png"),
},
{
  "name":"codescamp Tutorial",
  "display-name":"yangesh Sharma",
  "src": require("../Assets/joy.png"),
},

{
  "name":"Webopt Dev",
  "display-name":"Webopt Dev",
  "src": require("../Assets/Keith.png"),
},
{
  "name":"kylian  Sharma",
  "display-name":"Kylian  Sharma",
"src": require( "../Assets/jack.png"),
},
{
  "name":"peter bryan",
  "src":"../Assets/megan.png",
"src": require("../Assets/Keith.png"),
}
];

  const ANIMALS = ["Dog", "Cat", "Chicken", "Dragon", "Camel"];
  
  const ContactItem = ({user}) => {
    const give = () =>{
      let selectedUser = user.item.name;
      Alert.alert(`are you sure you want to call, ${selectedUser} now`);
      
    }
    return (
      <>
      <Pressable onPress={give}>
      <View style={{backgroundColor:"white", flexDirection:"row",height:80,marginTop:3,borderBottomColor:"#fcfdfafa",borderBottomWidth:1}}>
      <Image source={user.item.src} style={{borderRadius:50,borderColor:"yellow",height:40,width:40, marginLeft:15}} />
      <Text style={{color:"black" ,marginRight:15,marginTop:2, marginLeft:10, fontWeight:"bold"}}>{user.item.name}</Text>
        <Ionicons
              size={21}
              name= 'videocam-outline' 
              color= '#b40227fa' 
         style={{marginRight:10, position:"absolute" ,right:0}}   />
      </View>
</Pressable>
      </>
      );
    
  }
  const navigation = useNavigation();
   
  return (
    <SafeAreaView style={{backgroundColor:"white",paddingTop:24,paddingBottom:8}}>
    <View>
    <FlatList
        data={Users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(user) => {
          return (
           <ScrollView>
            <ContactItem user={user} />
</ScrollView>
            
          );
        }}
      />

                        <Ionicons
              size={35}
              name= 'call-outline' 
              color= '#dce5e4fa' 
         style={{marginRight:10, position:"absolute" ,right:30,bottom:50,backgroundColor:"#20e925fa",padding:4,paddingHorizontal:12,borderRadius:6}}   />
   
        
   </View>
</SafeAreaView>
    
    );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 100,
  },
  listItem: {
    backgroundColor: "orange",
    borderWidth: 1,
    borderColor: "#333",
    padding: 25,
  },
});

export default Contacts;
