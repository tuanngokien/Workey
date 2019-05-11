import React from "react";
import ScrollView from "../../components/ScrollView";
import ProfileLandingContainer from "./Landing";
import BasicProfileContainer from "./BasicProfile";


export default class ProfileContainer extends React.Component {
    render() {
        return (
            <ScrollView scrollViewStyle={{backgroundColor: "#ffffff"}}>
                <ProfileLandingContainer/>
                <BasicProfileContainer/>
            </ScrollView>
        )
    }
}