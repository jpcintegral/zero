import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backImage = require("../assets/back.png");
const LogoImage = require("../assets/Logo_4BH_375.png");

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
      <Image source={LogoImage} style={styles.logoImage} />
        <Text style={styles.title}>Log In</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={{fontWeight: 'bold',fontFamily: "sans-serif", color: '#fff', fontSize: 16}}> Log In</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: '#3d5975',fontFamily: "sans-serif", fontWeight: '600', fontSize: 11}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: '#3d5975',fontFamily: "sans-serif", fontWeight: '600', fontSize: 14}}>Accept terms</Text>
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
    fontFamily: "sans-serif",
    color: "#3d5975",
    alignSelf: "center",
    paddingBottom: 24,
  },
  logoImage: {
    width: 220,
    height: 65,
    alignSelf: "center",
    bottom: 10,
  },
  input: {
    backgroundColor: "#e5ebf2",
    color: "#3d5975",
    fontFamily: "sans-serif",
    height: 58,
    alignSelf: "center",
    width:300,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
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
    width: '85%',
    height: '90%',
    alignSelf: "center",
    position: "absolute",
    top: 35,
    bottom: 35,
    backgroundColor: '#EFF6FB',
    borderRadius: 15,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#373b4d',
    height: 58,
    alignSelf: "center",
    width:300,
    fontFamily: "sans-serif",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
