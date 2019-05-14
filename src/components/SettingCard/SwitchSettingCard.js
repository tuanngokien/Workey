import React from "react";
import {View, StyleSheet, Text} from "react-native";
import { Switch } from 'react-native-switch';
import {styles as SettingStyles} from './SettingCard';

const styles = StyleSheet.create({
    ...SettingStyles,
    title: {
        ...SettingStyles.title,
        fontFamily: "Nunito-SemiBold",
        fontSize: 16,
    }
});

export default class SwitchSettingCard extends React.Component{
    state = {
        value: true
    };

    componentDidMount() {
        this.setState({value: this.props.defaultValue})
    }

    onChange = (value) => {
        this.setState({value})
    };

    render(){
        const {title} = this.props;
        let {value} = this.state;
        return (
            <View style={[styles.container, {marginVertical: 10}]}>
                <View style={[styles.container, {marginVertical: 0, borderBottomWidth: 0, flex: 0.8}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Switch
                    value={value}
                    onValueChange={this.onChange}
                    backgroundActive={'green'}
                    backgroundInactive={'gray'}
                    backgroundActive={'#30a566'}
                    backgroundInactive={'rgba(183, 183, 183, 1)'}
                    circleSize={20}
                    innerCircleStyle={{borderWidth: 2, borderColor: "transparent"}}
                    changeValueImmediately={true}
                />
            </View>
        )
    }
}

