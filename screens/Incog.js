import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const backImage = require("../assets/Back_i.png");
const LogoImage = require("../assets/Logo_4BH_375.png");

export default function Incog({ navigation }) {

  const [email, setEmail] = useState('');
  const password= 'invitado' ;
  

const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
     
      <SafeAreaView style={styles.form}>
      <Image source={LogoImage} style={styles.logoImage} />
        <View>
        <Text style={styles.title}>Anonymous </Text>
        <Text style={styles.title}>Login</Text>
        </View>
        <View  style={styles.Divider}/>
      <View style={{marginButtom: 40, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
           <Text style={styles.text1}>You will be connected but{"\n"} you will remain anonymous </Text>
      </View>
    
        
          <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
   
        
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'bold',fontFamily: "sans-serif-medium", color: '#fff', fontSize: 16}}>Login</Text>
      </TouchableOpacity>
     
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontFamily: "sans-serif-medium",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 2,
    letterSpacing: 2.5,
  },
  logoImage: {
    width: 220,
    height: 65,
    alignSelf: "center",
    
  },
  input: {
    backgroundColor: "#a8a8a8",
    color: "#fff",
    fontFamily: "sans-serif-medium",
    height: 58,
    alignSelf: "center",
    width:"86%",
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 1,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
    backgroundColor:"#7FCFEF",
  },
  whiteSheet: {
    width: '80%',
    height: '94%',
    alignSelf: "center",
    position: "absolute",
    top: 15,
    bottom: 35,
    backgroundColor: '#303434',
    borderRadius: 10,
    borderColor:"#fff",
    borderWidth:1
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#5a5a5a',
    fontFamily: "sans-serif-medium",
    height: 58,
    alignSelf: "center",
    width:"86%",
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
     },
  Divider:{
    borderBottomColor: '#a7bcd1',
    borderBottomWidth: 2,
     width:"86%",
     alignSelf: "center",
     marginBottom:5
  },
  text1:{
    color: '#fff',
    fontFamily: "sans-serif-medium", 
    fontWeight: 'normal',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom:20,
    letterSpacing: 2,
    textAlign:"center"

  }
});