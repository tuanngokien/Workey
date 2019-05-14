import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import {Alert} from "react-native";
import {signInUser} from "./utils";

export function facebookLogin() {
    return async (dispatch) => {
        try {
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                // handle this however suites the flow of your app
                throw new Error('User cancelled request');
            }

            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

            // get the access token
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                // handle this however suites the flow of your app
                throw new Error('Something went wrong obtaining the users access token');
            }

            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            const user = firebaseUserCredential.user;
            let {displayName, email, photoURL} = user;
            firebase.firestore().collection('user').doc(user.uid).set({displayName, email, photoURL})
                .then((data) => {
                    console.log('data ' , data)
                }).catch((error) => {
                    console.log(error);
            });

            dispatch(signInUser(user));
        } catch (e) {
            console.log(e);
            Alert.alert(e.toString());
        }
    }
}

