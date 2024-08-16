import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useEffect, useState } from 'react';
//components
import Login from './components/parts/Login';
import { auth } from './config/firebase';
import * as Device from 'expo-device';

export default function App() {
 
    // Initialize Firebase with your config
    const [user, setUser] = useState(null);
    const [method, setMethod] = useState("login");
    // Listen   for auth state changes
    try{
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
          setUser(authenticatedUser);
        });
    
        // Unsubscribe when component unmounts
        return () => unsubscribe();
      }, []);
    }catch(e){
      console.log(e);
    }

    //console.log(user)
    //console.log(Device.deviceName + "|" + Device.manufacturer + "|" + Device.osName + "|" + Device.totalMemory + "|"+ Device.osBuildFingerprint +"|"+ Device.platformApiLevel)

  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <View style={style.logo}>
          <Image source={require("./assets/cal.png")} style={style.logoIn}/>
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>ToDon't</Text>
          <Text style={style.banner}>list it, forget about it</Text> 
        </View>
      </View>
      <View style={style.box}>
        {
          method==="login"?
          <Login/>
          :
          <Login/>
        }
      </View>
      <Text style={style.made}>made by Noel @2024</Text>
    </View>
    );
}

const style = StyleSheet.create({
  container: {
    width:'100%',height:'97%',backgroundColor:'#571673',alignItems:'center',justifyContent:'space-around',marginTop:'8%'
  },
  box: {
    width:'80%',height:'50%',backgroundColor:'white',elevation:20,borderRadius:20,alignItems:'center',justifyContent:'center',overflow:'hidden'
  },
  textLogo:{
    fontSize:40,color:'white',fontWeight:'bold',textDecorationLine:"underline",
  },
  title: {
    color:"white",fontSize:35,
  },
  logo: {
   width:70,height:70,backgroundColor:'white',borderRadius:10,
  },
  logoIn:{
    width:'100%',height:'100%'
  },
  logoContainer: {
    width:'100%',flexDirection:'row',alignItems:'center',justifyContent:"space-evenly",
  },
  made: {
    color:'lightgrey'
  },
  banner:{ 
    color:'white'
  },
  textContainer:{
    marginLeft:-50
  }
})