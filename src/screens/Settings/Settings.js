import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten'
import {db} from "../../../App"
import { RkSwitch } from '../../../node_modules/react-native-ui-kitten/src/components/switch/rkSwitch.android';
import AvatarUser from "../../components/AvatarUser/AvatarUser"
let styles = RkStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.base,
    },
    header: {
        paddingVertical: 25,
    },
    section: {
        marginVertical: 25,
    },
    heading: {
        paddingBottom: 12.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base,
        alignItems: 'center',
    },
    rowButton: {
        flex: 1,
        paddingVertical: 24,
    },
    switch: {
        marginVertical: 14,
    },

}))


class SettingsScreen extends React.Component {
    state ={
        notificationsEnable : true,

    }
    onPushNotificationsSettingChanged = (value) => {
        this.setState({ notificationsEnable: value });
      };
    getData(){
        db.transaction((tx)=>{
            tx.executeSql('SELECT * from user',(tx,rs)=>{
                let len = rs.rows.length;
                return len
            })
        })
        
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <AvatarUser></AvatarUser>
                <View style={styles.section}>
                    <View style={[styles.heading, styles.row]}>
                        <RkText rkType="primary header6">PROFILE SETTINGS</RkText>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType="header6">Edit Profile</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>Change Password</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <RkText rkType='header6'>Send Push Notifications</RkText>
                        <RkSwitch
                            style={styles.switch}
                            value={this.state.notificationsEnable}
                            name="Push"
                            onValueChange={this.onPushNotificationsSettingChanged}
                        />
                    </View>
                </View>
                <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>SUPPORT</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Help</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Privacy Policy</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Terms & Conditions</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Logout</RkText>
          </TouchableOpacity>
        </View>
      </View>
            </ScrollView>
        );
    }
}

export default SettingsScreen;