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
import BaseLandingContainer from "../../containers/BaseLanding"
import HomeBackground from "../../assets/images/avatar/avatar5.jpeg";
import Icon from "react-native-elements/src/icons/Icon";
import {SettingDivider, Divider,NotiDivider} from "../../components/Divider";

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
        fontSize: 20,
        color:"black",
        marginBottom:"2%"
    },
    section: {
        marginVertical: 25,
    },
    heading: {
        paddingBottom: 12.5,
    },
    row: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingHorizontal: 12.5,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "black",
        //alignItems: 'center',
    },
    rowButton: {
        flex: 1,
        flexDirection:"row",
        paddingVertical: 18,
    },
    switch: {
        marginVertical: 14,
    },
    imageBackground: {        
        width: '100%',
        height: 190,
        resizeMode: "cover",
        backgroundColor:"transparent"
    },
    containerSetting:{
        marginLeft: "3%"
    }

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
                <View style={{marginBottom:122}}>
                <ImageBackground source={HomeBackground} blurRadius={3} style={styles.imageBackground}
                    imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>

                    <StatusBar translucent backgroundColor={"transparent"} />
                    <View>
                        <AvatarUser name ="Tobiichi Origami" email="tobi.ori@gmail.com"></AvatarUser>
                    </View>
                </ImageBackground>
                </View>
                <View>                
                    {/* <Icon name="pencil" type="font-awesome" color="black" size ={35} iconStyle={{paddingBottom:5}} /> */}
                </View>
                <View style={styles.containerSetting}>
                    <SettingDivider/>
                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.textRow}>Preferences</Text>
                        <View>
                        <Icon name="sliders" type="font-awesome" color="black" size ={25} containerStyle={{marginLeft:"65%"}}  />
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.containerSetting}>
                    <SettingDivider/>
                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.textRow}>Account</Text>
                        <Icon name="cog" type="font-awesome" color="black" size ={25} containerStyle={{marginLeft:"65%"}}  />
                    </TouchableOpacity>                    
                </View>
                <View style={styles.containerSetting}>
                    <SettingDivider/>
                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.textRow}>Help Center</Text>
                        <Icon name="question" type="font-awesome" color="black" size ={25} containerStyle={{marginLeft:"55%"}}  />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerSetting}>
                    <SettingDivider/>
                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.textRow}>Logout</Text>
                        <Icon name="sign-out" type="font-awesome" color="black" size ={25} containerStyle={{marginLeft:"68%"}}  />
                    </TouchableOpacity>     
                    <SettingDivider/>               
                </View>
                {/* <View style={styles.section}>
                     <View style={[styles.heading, styles.row,{flexDirection:"column"}]}> 
                    
                        <SettingDivider style={{borderColor:"black"}}/>
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
                </View> */}
            </ScrollView>
        );
    }
}

export default SettingsScreen;