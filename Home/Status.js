import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Voximplant} from 'react-native-voximplant';


const Status = () => {
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




const ContactItem = ({user}) => {
    return (
      <>
      <View style={{height:300,width:390,borderRadius:15,marginBottom:5}}>
      <Image source={user.item.src} style={{borderRadius:5,height:"100%",width:"100%"}} />
 
      </View>

      </>
      );
    
  }
  
  const navigation = useNavigation();
   
  return (
    <SafeAreaView style={styles.container}>
    <View>
   <Text style={styles.create}>Create Status</Text>
   <View style={styles.add}>
   <View style={styles.wrap}>
   <Image source={require("../Assets/joy.png")} style={styles.profile}/>
   <Ionicons
              size={21}
              name= 'add' 
              color= '#0e35e7fa' 
         style={{marginLeft:18, position:"absolute" ,right:0,bottom:-25,backgroundColor:"#083d35fa",paddingVertical:4,borderRadius:50,paddingHorizontal:4}}   />
   </View>
   <Text style={styles.addtxt}>{`My Status
 \n `} <Text style={styles.down}> Tap to add status update</Text>
   </Text>
   
  
   </View>
    <Pressable style={styles.press}>
<Text style={styles.start}>Start share screen Streaming</Text>
</Pressable>


   </View>
</SafeAreaView>
    
    );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    padding: 16,
        backgroundColor: "#d5e0d5fa",
  },
  listItem: {

    borderWidth: 1,
    borderColor: "#333",
    padding: 25,
  },
  profile:{
    width:"100%",
    height:"100%",
    borderRadius:50,
    marginLeft:14,
    marginTop:14,
  },
  down:{
    fontSize:12,
    color:"#a6aeadfa",
    marginTop:3,
  },
  wrap:{
    width:68,
    height:68,
    marginRight:15,
  },
  add:{
    flexDirection:"row",
    alignItems:"center",
  },
  create:{
    color:"white",
    fontWeight:"bold",
    fontSize:18,
  },
  addtxt:{
    color:"white",
    fontWeight:"bold",
    fontSize:18,
    marginLeft:5,
    marginTop:14,
  },
  press:{
    width:200,
    backgroundColor:"#0a7d58fa",
    padding:4,
    borderRadius:5,
    marginTop:49,
    alignSelf:"center",
  },
  start:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    textAlign:"center",
marginBottom:15,
  },
  whatsapp:{
    fontSize:15,
    textAlign:"right",
    color:"#1ce9cdfa",
    marginTop:18,
    fontWeight:"bold",
  },
  wap:{
   fontSize:15,
    textAlign:"left",
    color:"#1ce9cdfa",
    marginTop:18,
    fontWeight:"bold", 
  }
});

export default Status;
