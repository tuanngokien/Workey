import firebase from "react-native-firebase"
export const  chatRef =firebase.firestore().collection('chat');
export const userRef = firebase.firestore().collection('user');