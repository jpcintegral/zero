import React, {useEffect, useState} from 'react';
import Button from 'react-native-button';
import {ActivityIndicator, Text, View, StyleSheet, Alert,Image} from 'react-native';
//import auth from '@react-native-firebase/auth';
//import firebase from '@react-native-firebase/app';
//import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
//import {useDispatch} from 'react-redux';
//import {login} from '../reducers';
import {AppStyles} from './AppStyles';
import Login from './Login';
import Signup from './Signup';
import Chat from './Chat';
import Home from './Home';

const backImage = require("../assets/BG_4BH_375_1.png");
const LogoImage = require("../assets/Logo_4BH_375.png");
const ImageConfidencial = require("../assets/BeConfi_4BH_375.png");



function WelcomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  //const dispatch = useDispatch();

  //useEffect(() => {
  //  tryToLoginFirst();
  //}, []);



  //if (isLoading == true) {
  //  return (
  //    <ActivityIndicator
  //      style={styles.spinner}
  //      size="large"
  //      color={AppStyles.color.tint}
  //    />
  //  );
  //}
  return (
 
    <View style={styles.container}>
     <Image source={backImage} style={styles.backImage} />
          <View style={styles.whiteSheet} />
        <Image source={LogoImage} style={styles.logoImage} />
          <Button
            containerStyle={styles.loginContainer}
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
            Log In
          </Button>
          <Button
            containerStyle={styles.signupContainer}
            style={styles.signupText}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Button>
          <Button
            containerStyle={styles.Continueasanonymus}
            style={styles.ContinueasanonymusTex}
            onPress={() => navigation.navigate('Home')}>
          Continue as {"\n"}anonymus
          </Button>
          <Image source={ImageConfidencial} style={styles.imageConfidencial}></Image>
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
     alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "#fff",
    
  },
  whiteSheet: {
    width: '80%',
    height: '80%',
    alignSelf: "center",
    position: "absolute",
    top: 100,
    bottom: 35,
    backgroundColor: '#f6f9fe',
    borderRadius: 20,
  },
  logoImage: {
    width: 220,
    height: 65,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor:"#4682b4",
    padding: 13,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
    fontSize: 18,
    //fontFamily:"Avenir Light"
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor:"#5caaec",
    padding: 13,
    marginTop: 30,
  },
  signupText: {
    color: AppStyles.color.white,
    fontSize: 18,
    //fontFamily:"Avenir-Light"
  },
  Continueasanonymus:{
    width: AppStyles.buttonWidth.main,
    backgroundColor:"#3b393a",
    padding: 13,
    marginTop: 30,
  },
  ContinueasanonymusTex:{
    color: AppStyles.color.white,
    fontSize: 18
    //fontFamily:"Avenir-Light"
    
  },
  spinner: {
    marginTop: 200,
  },
  backImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
    backgroundColor:"#7FCFEF",
  },
  imageConfidencial:{
    top: 30,
    width: "60%",
    height: 60,
  }
});

export default WelcomeScreen;
