import React from "react";
import JobDetailContainer from "../../containers/JobDetail";
import {View, StyleSheet} from "react-native";
import {Navigator} from "../../components/TopNavigator/SimpleTopNavigator";
import ApplyButton from "../../components/ApplyButton";
import {DEVICE_WIDTH} from "../../constants";

const styles = StyleSheet.create({
    navContainer: {
        position: "absolute",
        top: 0,
        zIndex: 10000,
        width: "100%"
    },
    applyButtonContainer:{
        position: "absolute",
        bottom: 5,
        left: DEVICE_WIDTH * 0.1
    },
});

class JobDetail extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onBack = () => {
        this.props.navigation.goBack()
    };

    render() {
        return (
            <View>
                <View style={styles.navContainer}>
                    <Navigator title={""} rightIconName={"md-share"} onBack={this.onBack}/>
                </View>
                <JobDetailContainer/>
                <View style={styles.applyButtonContainer}>
                    <ApplyButton/>
                </View>
            </View>
        )
    }
}

export default JobDetail;