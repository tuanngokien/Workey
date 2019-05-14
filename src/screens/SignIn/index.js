import IntroScreen from "./Intro";
import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import {INTRO_SCREEN, SIGN_IN_SCREEN, SIGN_UP_SCREEN} from "./Tabs";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {connect} from "react-redux";
import {emailLogin, facebookLogin, googleLogin, emailSignUp, googleSignUp, facebookSignUp} from "../../actions/auth";

const ReduxSignInScreen = connect(
    null,
    {emailLogin, facebookLogin, googleLogin}
)(SignInScreen);


const ReduxSignUpScreen = connect(
    null,
    {emailSignUp, googleSignUp, facebookSignUp}
)(SignUpScreen);

const RootStack = createStackNavigator(
    {
        [INTRO_SCREEN]: IntroScreen,
        [SIGN_IN_SCREEN]: ReduxSignInScreen,
        [SIGN_UP_SCREEN]: ReduxSignUpScreen,
    },
    {
        initialRouteName: SIGN_UP_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);
