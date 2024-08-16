import React from 'react';
import { View,Text,Image,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const Login = () => {  
    
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    })

    useEffect(()=>{
        if(credentials.email!==""){
            console.log("Email is: " + credentials.email)
        }
    },[credentials.email])

    useEffect(()=>{
        if(credentials.password!==""){
            console.log("Password is: " + credentials.password)
        }
    },[credentials.password])

  return (
    <View style={style.container}>
        <Text>Login</Text>
        <TextInput placeholder='enter email' onChangeText={(text)=> setcredentials(prev => {return {...prev,email:text}})} style={style.inputs}/>
        <TextInput placeholder='enter password' onChangeText={(text)=> setcredentials(prev => {return {...prev,password:text}})} style={style.inputs}/>
        <TouchableOpacity style={style.submit}>
            <View style={style.submit}>
                <Text style={style.submitText}>submit</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
    container: {
        width:'100%',height:'100%',backgroundColor:'white',flexDirection:'column',alignItems:'center',justifyContent:'center'
    },
    inputs:{
        width:'80%',height:40,borderWidth:1,borderColor:'black',padding:10,margin:10
    },
    submit:{
        width:'80%',height:40,backgroundColor:'lightgreen',borderRadius:4,alignItems:'center',justifyContent:'center'
    },
    submitText: {
        fontSize:15,fontWeight:"300",color:'black'
    }
})