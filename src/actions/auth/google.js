import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'
import {signInUser} from "./utils";
import {Alert} from "react-native";


export function googleLogin() {
    return async (dispatch) => {
        try {
            // add any configuration settings here:
            await GoogleSignin.configure({
                webClientId: "426000576581-0o4c24jbbcmi9mkiqs1kh87p50ki5f7n.apps.googleusercontent.com",
            });
            await GoogleSignin.signOut();
            const data = await GoogleSignin.signIn();

            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            dispatch(signInUser(firebaseUserCredential.user));
        } catch (e) {
            // console.error(e);
            Alert.alert(e.toString())
        }
    }
}