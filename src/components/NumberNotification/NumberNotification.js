import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
    Alert
} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
let styles = StyleSheet.create({

})
class NumberNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <Badge value={this.props.number} status="error" 
                containerStyle={{ position: 'absolute', top: -8, right: -8 }}
            />
        )
    }
}
export default NumberNotification;