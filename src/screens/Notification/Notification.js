import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import TopNavigator from "../../components/TopNavigator/TopNavigator"
import {SimpleTopNavigator} from "../../components/TopNavigator";
import {TopNoti} from "../../components/TopNavigator"
import Notification from "../Notification/data"
import {ColoredDivider, Divider,NotiDivider} from "../../components/Divider";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import sendNoti from "../../components/PushNotification/sendNoti";
let styles=StyleSheet.create({
    
    notiReaded:{
        backgroundColor:"#FFFFFF",
        paddingTop:10,
        //color:"#CFCFCF",
        color:"red",
        height:90
    },
    notiNotReaded:{
        backgroundColor:"#ECF3FF",
        paddingVertical:10,
        //color:"#1C1C1C",
        color:"blue",
        height:90
    },
    icon:{
        fontSize:25,
        marginLeft:42,
        marginTop:-17
    },
    

    
})
class NotificationScreen extends React.Component {
    state={
        notification: Notification,
    }
    handleMessage(message) {
        if (message.length > 40) {
            let tmp = message.slice(0, 40) + "...";
            return (
                <Text>{tmp}</Text>
            )
        }
        else {
            return (
                <Text>{message}</Text>
            )
        }
    }
    renderNoti = ({ item }) => {
        return(             
             <TouchableOpacity style={[item.user.readed? styles.notiReaded :styles.notiNotReaded]} > 
                <NotiDivider/>
                <TouchableOpacity>                
                <View style={{flexDirection:"row", paddingTop:15}}>

                    <View style={{width: "20%"}} >
                        <Avatar
                            rounded
                            source={{
                                uri:"https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
                            }}
                            size={55}
                            containerStyle={{
                                borderRadius:100,
                                borderWidth: 1.5,
                                borderColor: "white",
                                marginLeft: 15
                            }}
                        />
                        <Icon name={item.icon} type="Feather" color={item.color} style={styles.icon} />
                    </View>
                    <View style={{width: "65%",marginLeft:15}}>
                        <Text style={{fontSize: 17,marginTop:4,color:"black"}}>
                            <Text style={{fontWeight:"bold",color:"#363636"}}>{item.user.name}</Text> 
                            {this.handleMessage(item.noti)}                                                                                    
                        </Text>
                    </View>
                    
                </View>
                <View style={{width: "20%",left:85,bottom:0,top:63,position:"absolute",flexDirection:"row",height:19}}>
                        <Icon name="clock-o" color={"blue"} style={{fontSize:15,marginTop:2,marginRight:3}}/>
                         <Text style={{color:"blue"}}>{item.user.time}</Text>
                </View>
                </TouchableOpacity>
                
                
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:"transparent"}}>
                <View >
                <TopNoti title={"Notification"} />                
                </View>
                <View>
                    <FlatList
                        data={this.state.notification}
                        renderItem={this.renderNoti}
                        keyExtractor={(item,index)=>item.user.id.toString()}
                    />
                </View>

            </ScrollView>

        );
    }
}

export default NotificationScreen;