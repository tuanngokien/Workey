import React from "react";
import TopNavigator from "../../components/TopNavigator";
import {ImageBackground, StatusBar, StyleSheet} from "react-native";
import HomeBackground from "../../assets/images/background/sky.png";

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 190,
        resizeMode: "cover",
    },
});


export default class BaseLandingContainer extends React.Component {
    render() {
        const {source, style} = this.props;
        const finalStyle = StyleSheet.flatten([styles.imageBackground, style])
        return (
            <ImageBackground source={source || HomeBackground} style={finalStyle}
                             imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <TopNavigator
                    containerStyle={{
                        backgroundColor: "transparent",
                        paddingTop: 20
                    }}
                    titleStyle={{
                        fontSize: 15,
                        fontFamily: ""
                    }}/>
                <StatusBar translucent backgroundColor={"transparent"}/>
                {this.props.children}
            </ImageBackground>
        );
    }
}