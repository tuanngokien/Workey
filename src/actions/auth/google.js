import {GoogleSignin} from 'react-native-google-signin';
import firebase from 'react-native-firebase'
import {signInUser, signUpUser} from "./utils";
import {Alert} from "react-native";


export function googleLogin(isNewUser) {
    return async (dispatch) => {
        try {
            // add any configuration settings here:
            await GoogleSignin.configure({
                webClientId: "588690593548-7kov24o9e8lqtbauccugp4cirpd4ehsa.apps.googleusercontent.com",
            });
            await GoogleSignin.signOut();
            const data = await GoogleSignin.signIn();
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            const user = firebaseUserCredential.user;
            if(isNewUser){
                signUpUser(user);
            }
            dispatch(signInUser(user));
        } catch (e) {
            // console.error(e);
            Alert.alert(e.toString())
        }
    }
}

export function googleSignUp() {
    return googleLogin(true);
}