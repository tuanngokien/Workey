import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Input} from 'react-native-elements';
import Icon from "react-native-vector-icons/Feather";
import LocationDropdown from "./LocationDropdown";
const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        marginVertical: "3%"
    },
    inputContainer: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 0,
        borderRadius: 8,
    },
    input: {
        fontFamily: "Nunito-Regular",
        fontSize: 14
    }
});

export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Search for jobs, keyskills'
                    rightIcon={
                        <LocationDropdown/>
                    }
                    leftIcon={
                        <TouchableWithoutFeedback onPress={this.props.onPress}>
                            <Icon
                                name='search'
                                size={24}
                                color='#8e8e8e'
                            />
                        </TouchableWithoutFeedback>
                    }
                    inputStyle={styles.input}
                    leftIconContainerStyle={{marginRight: 10}}
                    rightIconContainerStyle={{marginRight: 10}}
                    inputContainerStyle={{borderBottomWidth: 0, height: 55}}
                    containerStyle={styles.inputContainer}
                    shake={false}/>
            </View>
        )
    }
}