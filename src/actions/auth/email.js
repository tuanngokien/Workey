import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'


export async function emailLogin() {
    try {
        // login with email and password
        const firebaseUserCredential = await firebase.auth().signInWithEmailAndPassword("tuanngokien@gmail.com", "123456");

        console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
        console.error(e);
    }
}