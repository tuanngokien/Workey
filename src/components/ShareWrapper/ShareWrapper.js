import React from "react";
import {Share, Button, TouchableWithoutFeedback} from 'react-native';

export default class ShareWrapper extends Component {


    render() {
        const {children} = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onShare}>
                {children}
            </TouchableWithoutFeedback>
        )
    }
}