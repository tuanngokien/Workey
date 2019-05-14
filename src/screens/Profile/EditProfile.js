import React from "react";
import {View} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import EditProfileContainer from "../../containers/EditProfile";
// import {JOB_DETAIL_SCREEN} from "./Tabs";


class EditProfileScreen extends React.Component {
    onBack = () => {
        this.props.navigation.goBack()
    };

    render() {
        return (
            <View>
                <SimpleTopNavigator title={"Edit Profile"} rightIconName="md-done-all" onBack={this.onBack}/>
                <EditProfileContainer/>
            </View>
        )
    }
}

export default EditProfileScreen;