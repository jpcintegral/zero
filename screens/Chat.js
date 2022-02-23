
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
import { render } from 'react-dom';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  } from 'react';
  import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';
  import { GiftedChat } from 'react-native-gifted-chat';
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import { signOut } from 'firebase/auth';
  import { auth, database } from '../config/firebase';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
  import colors from '../colors';

export default function Chat(){ 
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

  const onSignOut = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
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
        });
      }, [navigation]);

    useLayoutEffect(() => {

        const collectionRef = collection(database, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setMessages(
            querySnapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user
            }))
          );
        });
    return unsubscribe;
      }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];    
        addDoc(collection(database, 'chats'), {
          _id,
          createdAt,
          text,
          user
        });
      }, []);
    
return (
 <WebView
    style={styles.container}
    originWhitelist={['*']}
    source={{ html: '<script src="https://zsbpreprodclient.azureedge.net/zsbv3.js?sp=r&st=2021-11-06T00:22:01Z&se=2022-11-06T08:22:01Z&spr=https&sv=2020-08-04&sr=c&sig=hWXzwzB3ElC1MGB1noBtVQugVnUC7UgvuWPArL%2BWrBE%3D"></script><zeroshot-bot textColor="#fff" color="#4682b4" height="410px" bot="U2FsdGVkX1/pNjVKTvAoXeebDsTCei88KYi037zhmAY4Mot+skj0qJ7xENjkgZ4NplTIyIZ87zozNraCWSAUni+MaWkV1KTxA3mdUlWbg/v8gZ97NdmvYccvqPYrbYxU+L2a22dB2EaJJU0jd1GikPPAMOSpUWGyzywMItLqDd9IJsfDOhbXlvr7DVUwkmF9wJMyFHz8JPbvAjIsXoIkciExziKjI5uN0WUhaWRyuVbyrv6F+0XZcVTsUj4oFYTCORl0Qo0nW0ikyAA2uDf+AwrzNbGVydX0WBNwXHFl6sih0vkvuQ23L8HtR9sxlGQOJSKV2WhiN2AGN5JevygQo2q2amYOkA/4ZsxI/cZf6stnXjrPS4ySjtPEQ/77SEPYIEGPD2dCI+wjyEmWglN+ClY0tN0O+teasQ9x/sn+HDyJdc8H772KmNXtprqglzat8cznpPpMUvxIdP0aZMrH/UVm4EyTdBGhKCAEBnn5J1jDQ+24WEBGbJSYUzmjbEn6DAjlmyqzyLZpc8Uy6kIFgw==" showCloseButton="false" openWidget="true"></zeroshot-bot>' }}
  />
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
},
});
