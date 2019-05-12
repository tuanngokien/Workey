import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: "row",
    },
    image: {
        width: 45,
        height: 45,
        marginRight: 15,
    }
});


// const SkillLogo = ({url}) => (<Image source={require(url)} style={styles.image}/>)



export default class SkillContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../../assets/images/logo/ubuntu.png")} style={styles.image}/>
                <Image source={require("../../assets/images/logo/pts.png")} style={styles.image}/>
                {/*<Image source={require("../../assets/images/logo/sketch.png")} style={styles.image}/>*/}
                <Image source={require("../../assets/images/logo/ai.png")} style={styles.image}/>
                <Image source={require("../../assets/images/logo/behance.png")} style={styles.image}/>
                <Image source={require("../../assets/images/logo/xd.png")} style={styles.image}/>
                <Image source={require("../../assets/images/logo/evernote.png")} style={styles.image}/>
            </View>
        )
    }
}