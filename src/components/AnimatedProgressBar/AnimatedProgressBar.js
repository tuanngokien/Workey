import React from "react";
import * as Progress from "react-native-progress";


export default class AnimatedProgressBar extends React.Component {
    state = {
        progress: 0
    };

    componentDidMount() {
        const {progress} = this.props;
        setTimeout(() => {
            this.setState({progress});
        }, 500)
    }

    render() {
        return (
            <Progress.Bar {...this.props} progress={this.state.progress}/>
        )
    }
}