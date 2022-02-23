import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';

const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";
const backImage = require("../assets/BG_4BH_375_2.png");
const backvideo = require("../assets/video/MANUAL.mov");



const Home = () => {

    const navigation = useNavigation();
   const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
      };
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <TouchableOpacity
                  style={{
                    marginRight: 10
                  }}
                  onPress={onSignOut}
                >
                  <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
                </TouchableOpacity>
              )
            // ,
             //  headerRight: () => (
             //   <Image
             //       source={{ uri: catImageUrl }}
             //       style={{
             //           width: 40,
             //           height: 40,
             //           marginRight: 15,
             //       }}
             //   />
             // ),
        });
    }, [navigation]);
    
   
    return (
        <View style={styles.container}>
              <Image source={backImage} style={styles.backImage} />
              <Image  style={styles.backVideo} />
              <Video
        ref={video}
        style={styles.backgroundVideo}
        source={backvideo}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
                       <TouchableOpacity
                           onPress={() => navigation.navigate("Chat")}
                           style={styles.chatButton}> 
                           <Entypo name="chat" size={24} color={colors.lightGray} />
                       </TouchableOpacity>
                   </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: "blue",
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        },        
  backImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
    backgroundColor:"#7FCFEF",
  },backgroundVideo: {
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
     width:"100%",
     height:400},
     backVideo: {
        width: "65%",
        height: "70%",
        position: "absolute",
        position: 'absolute',
        top: 10,
        left: 70,
        bottom: 0,
        right: 0,
        //resizeMode: 'cover',
        backgroundColor:"#303030",
      }
    });