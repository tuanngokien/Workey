import React from "react";
import {View} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import ChangePasswordContainer from "../../containers/ChangePassword";


class EditProfileScreen extends React.Component {
    onBack = () => {
        this.props.navigation.goBack()
    };

    render() {
        return (
            <View>
                <SimpleTopNavigator title={"Edit Password"} rightIconName="md-done-all" onBack={this.onBack}/>
                <ChangePasswordContainer/>
            </View>
        )
    }
}

export default EditProfileScreen;