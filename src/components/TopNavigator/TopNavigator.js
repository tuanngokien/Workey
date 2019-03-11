import React from "react";
import {View, Text, StatusBar} from "react-native"
import {Avatar, Badge} from 'react-native-elements';

class TopNavigator extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 10,
                paddingHorizontal: "5%"
            }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={{fontSize: 24, fontFamily: "Poppins-Bold", color: "#000000"}}>
                    Categories
                </Text>
                <View style={{flexDirection: "row"}}>
                    {/*<View>*/}
                    {/*<Badge value="99+" status="error"/>*/}
                    {/*</View>*/}
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        size={47}
                        containerStyle={{
                            borderRadius: 100,
                            borderWidth: 1.5,
                            borderColor: '#d6d7da'
                        }}
                        overlayContainerStyle={{
                            borderWidth: 2.5,
                            borderColor: 'transparent'
                        }}
                    />
                </View>

            </View>
        );
    }
}

export default TopNavigator;