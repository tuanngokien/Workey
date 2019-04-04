import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Dropdown} from 'react-native-material-dropdown';
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
    defaultFont: {
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        color: "#000000"
    }
});

export default class LocationDropdown extends Component {
    renderBase({value}) {
        return (
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                <Icon
                    name={"map-pin"}
                    style={[styles.defaultFont, {marginRight: 2}]}
                />
                <Text style={styles.defaultFont}>{value}</Text>
            </View>

        );
    }

    render() {
        let data = [{
            value: 'Anywhere',
        }, {
            value: 'Hanoi',
        }, {
            value: 'Da Nang',
        }, {
            value: 'HCM City',
        }];


        return (
            <Dropdown
                labelFontSize={0}
                labelHeight={0}
                containerStyle={{width: 90}}
                value={"Anywhere"}
                inputContainerStyle={{borderBottomColor: "transparent", padding: 0}}
                itemTextStyle={{fontFamily: "Nunito-Regular"}}
                inputContainerPadding={0}
                dropdownPosition={2}
                data={data}
                renderBase={this.renderBase}
            />
        );
    }
}