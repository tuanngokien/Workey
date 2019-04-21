import React from "react"
import {View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import {DEVICE_WIDTH} from "../../constants";

const ViewWidth = DEVICE_WIDTH * 0.9;
const styles = StyleSheet.create({
    imageBackground: {
        width: ViewWidth * 0.79,
        height: 160,
    },
    overlayContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 6,
    },
    jobInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    brandLogo: {
        width: 45,
        height: 45,
        resizeMode: "contain"

    },
    title: {
        fontSize: 14,
        color: "#ffffff",
        fontFamily: "Nunito-Bold",
    },
    subtitle: {
        fontSize: 13,
        color: "#ffffff",
        fontFamily: "Nunito-SemiBold",
    }
});

export default class JobCard extends React.Component {
    render() {
        const {banner, logo, title, subtitle} = this.props;
        return (
            <ImageBackground source={banner} style={styles.imageBackground} imageStyle={{borderRadius: 6}}>
                <View style={styles.overlayContainer}>
                    <View style={styles.jobInfoContainer}>
                        <View>
                            <Image source={logo} style={styles.brandLogo}/>
                        </View>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}