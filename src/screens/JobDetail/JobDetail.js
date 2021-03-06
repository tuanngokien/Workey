import React from "react";
import JobDetailContainer from "../../containers/JobDetail";
import {View, StyleSheet} from "react-native";
import {Navigator} from "../../components/TopNavigator/SimpleTopNavigator";
import ApplyButton from "../../components/ApplyButton";
import {DEVICE_WIDTH} from "../../constants";
import {SHOW_FULL_MAP} from "./Tabs";
import {onShare} from "../../actions/share";


const styles = StyleSheet.create({
    navContainer: {
        position: "absolute",
        top: 0,
        zIndex: 10000,
        width: "100%"
    },
    applyButtonContainer: {
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
    renderFull = (props) => {
        this.props.navigation.navigate(SHOW_FULL_MAP, props)
    };

    onShare = () => {
        onShare("http://uetworkey.tk/jobs/" + this.props.navigation.getParam("id"));
    };

    render() {
        const id = this.props.navigation.getParam("id");
        return (
            <View>
                <View style={styles.navContainer}>
                    <Navigator title={""} rightIconName={"md-share"} onBack={this.onBack} onRightPress={this.onShare}/>
                </View>
                <JobDetailContainer renderFull={this.renderFull} id={id}/>
                <View style={styles.applyButtonContainer}>
                    <ApplyButton/>
                </View>
            </View>
        )
    }
}

export default JobDetail;