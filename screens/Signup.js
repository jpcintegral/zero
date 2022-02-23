import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,Divider  } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const backImage = require("../assets/back.png");
const LogoImage = require("../assets/Logo_4BH_375.png");

export default function Signup({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Text style={styles.title}>Sign Up</Text>
        <View  style={styles.Divider}/>
          <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
            <Text style={styles.Confidencial}>Your data and infotmation{"\n"} are cofidential </Text>
           </View>
         <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'normal',fontFamily: "sans-serif-medium", color: '#fff', fontSize: 16}}> Submit</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: '#3d5975', fontWeight: '600', fontSize: 14}}>Do you have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{color: '#a7bcd1',fontFamily: "sans-serif", fontWeight: '600', fontSize: 14}}> Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: '#3d5975',fontFamily: "sans-serif", fontWeight: '600', fontSize: 14}}>I accept terms and conditions </Text>
      </View>
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
    color: "#3d5975",
    alignSelf: "center",
    paddingBottom: 24,
  },
  Confidencial:{
    fontSize: 20,
    fontFamily: "sans-serif-light",
    color: "#3d5975",
    alignSelf: "center",
    fontWeight:"900",
    textAlign:"center"
  },
  logoImage: {
    width: 220,
    height: 69,
    alignSelf: "center",
    bottom: 10,
  },
  input: {
    backgroundColor: "#e5ebf2",
    color: "#3d5975",
    fontFamily: "sans-serif-medium",
    height: 58,
    alignSelf: "center",
    width:"86%",
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 1,
    padding: 12,
    marginTop:10
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
    height: '90%',
    alignSelf: "center",
    position: "absolute",
    top: 35,
    bottom: 35,
    backgroundColor: '#f6f9fe',
    borderRadius: 30,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#373b4d',
    fontFamily: "sans-serif-medium",
    height: 58,
    alignSelf: "center",
    width:"86%",
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Divider:{
    borderBottomColor: '#a7bcd1',
    borderBottomWidth: 2,
     width:"86%",
     alignSelf: "center",
     marginBottom:5
  }
});