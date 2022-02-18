//import React, {
//    useState,
//    useEffect,
//    useLayoutEffect,
//    useCallback
//  } from 'react';
//  import { TouchableOpacity, Text } from 'react-native';
//  import { GiftedChat } from 'react-native-gifted-chat';
//  import {
//    collection,
//    addDoc,
//    orderBy,
//    query,
//    onSnapshot
//  } from 'firebase/firestore';
//  import { signOut } from 'firebase/auth';
//  import { auth, database } from '../config/firebase';
//  import { useNavigation } from '@react-navigation/native';
//  import { AntDesign } from '@expo/vector-icons';
//  import colors from '../colors';
//
//
//  export default function Chat() {
//
//    const [messages, setMessages] = useState([]);
//    const navigation = useNavigation();
//
//  const onSignOut = () => {
//      signOut(auth).catch(error => console.log('Error logging out: ', error));
//    };
//
//    useLayoutEffect(() => {
//        navigation.setOptions({
//          headerRight: () => (
//            <TouchableOpacity
//              style={{
//                marginRight: 10
//              }}
//              onPress={onSignOut}
//            >
//              <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
//            </TouchableOpacity>
//          )
//        });
//      }, [navigation]);
//
//    useLayoutEffect(() => {
//
//        const collectionRef = collection(database, 'chats');
//        const q = query(collectionRef, orderBy('createdAt', 'desc'));
//
//    const unsubscribe = onSnapshot(q, querySnapshot => {
//        console.log('querySnapshot unsusbscribe');
//          setMessages(
//            querySnapshot.docs.map(doc => ({
//              _id: doc.data()._id,
//              createdAt: doc.data().createdAt.toDate(),
//              text: doc.data().text,
//              user: doc.data().user
//            }))
//          );
//        });
//    return unsubscribe;
//      }, []);
//
//    const onSend = useCallback((messages = []) => {
//        setMessages(previousMessages =>
//          GiftedChat.append(previousMessages, messages)
//        );
//        // setMessages([...messages, ...messages]);
//        const { _id, createdAt, text, user } = messages[0];    
//        addDoc(collection(database, 'chats'), {
//          _id,
//          createdAt,
//          text,
//          user
//        });
//      }, []);
//
//      return (
//        // <>
//        //   {messages.map(message => (
//        //     <Text key={message._id}>{message.text}</Text>
//        //   ))}
//        // </>
//        <GiftedChat
//          messages={messages}
//          showAvatarForEveryMessage={false}
//          showUserAvatar={false}
//          onSend={messages => onSend(messages)}
//          messagesContainerStyle={{
//            backgroundColor: '#fff'
//          }}
//          textInputStyle={{
//            backgroundColor: '#fff',
//            borderRadius: 20,
//          }}
//          user={{
//            _id: auth?.currentUser?.email,
//            avatar: 'https://i.pravatar.cc/300'
//          }}
//        />
//      );
//}

import { StatusBar } from 'expo-status-bar';
import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View  } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function Chat() {
 return (
 <WebView
    style={styles.container}
    originWhitelist={['*']}
    source={{ html: '<script src="https://zsbpreprodclient.azureedge.net/zsbv3.js?sp=r&st=2021-11-06T00:22:01Z&se=2022-11-06T08:22:01Z&spr=https&sv=2020-08-04&sr=c&sig=hWXzwzB3ElC1MGB1noBtVQugVnUC7UgvuWPArL%2BWrBE%3D"></script> <zeroshot-bot textColor="#fff" color="#202225" height="410px" bot="U2FsdGVkX19SV808+K8dcuzsqZLciFagvPaJdgJjW0TiTJxl6Yh8I/bCMgwnAtTpvz3/dOMj3+uMcwm0aNEdohkQpfuzjLa+ZPnq2Q1P6lHfkLrqvfAU19atJzz4IkWjT//8VoL5vVFGzHViMC2+OoufFb8ADRkigFJ0VKeuWgTwE0GJIh2pi8eD5PTWH0VA4p7ZzMhVvDSJVD6DD7rvKPGcXXupIG2RgaLBQUvEN9La+zYb3C79m1dg3S1OR+Sx4VGMClYwzOTpaQeoJGt1PPFNKtkHBip3TKya6nJj++SfPfntVne1WOi0cJJby2jZAStzKY1WirnAUgDX0DmJNYlf0FeyT1RmzIoXRC2ujKQj3VC7CissGOKLulWjgi6XuF/fpQYp/qxqspmxM+0WKpInC5LQrsQJ+rocgixUyIAK+r5Zo1/r/1+RkVhMMt8WJNL7paWQ7QIvyCsX/A5zRqkUXfnCdqkT9qdcUQeukuuX4OVAtCYm2k6/VDJ6MHba3DpzaH+Jthn0HALwuV8zDQ==" showCloseButton="false" openWidget="true"></zeroshot-bot>' }}
  />
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
},
});
