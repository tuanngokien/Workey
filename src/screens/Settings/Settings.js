import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ImageBackground,
    StatusBar,
    Switch
} from 'react-native';
import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten'
import { db } from "../../../App"
import { RkSwitch } from '../../../node_modules/react-native-ui-kitten/src/components/switch/rkSwitch.android';
import AvatarUser from "../../components/AvatarUser/AvatarUser"
import BaseLandingContainer from "../../containers/Landing/Base"
import HomeBackground from "../../assets/images/background/sky.png";

let styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    header: {
        paddingVertical: 25,
    },
    textHeader: {
        fontSize: 20,
    },
    textRow: {
        fontSize: 15,
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
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "white",
        alignItems: 'center',
    },
    rowButton: {
        flex: 1,
        paddingVertical: 24,
    },
    switch: {
        marginVertical: 14,
    },
    imageBackground: {
        width: '100%',
        height: 190,
        resizeMode: "cover",
    },

})


class SettingsScreen extends React.Component {
    state = {
        notificationsEnable: true,

    }
    onPushNotificationsSettingChanged = (value) => {
        this.setState({ notificationsEnable: value });
    };
    getData() {
        db.transaction((tx) => {
            tx.executeSql('SELECT * from user', (tx, rs) => {
                let len = rs.rows.length;
                return len
            })
        })

    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <BaseLandingContainer>
                <AvatarUser></AvatarUser>
            </BaseLandingContainer> */}
                <View style={{marginBottom:125}}>
                <ImageBackground source={HomeBackground} style={styles.imageBackground}
                    imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

                    <StatusBar translucent backgroundColor={"transparent"} />
                    <View>
                        <AvatarUser name ="Tobiichi Origami" email="tobi.ori@gmail.com"></AvatarUser>
                    </View>
                </ImageBackground>
                </View>
                
                <View style={styles.section}>
                    <View style={[styles.heading, styles.row]}>
                        <Text style={styles.textHeader}>PROFILE SETTINGS</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textRow}>Send Push Notifications</Text>
                        <Switch
                            style={styles.switch}
                            value={this.state.notificationsEnable}
                            onValueChange={this.onPushNotificationsSettingChanged}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={[styles.row, styles.heading]}>
                        <Text style={styles.textHeader}>SUPPORT</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Help</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <Text style={styles.textRow}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default SettingsScreen;