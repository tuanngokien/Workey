import React from "react";
import {TouchableWithoutFeedback, Animated} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class BookmarkButton extends React.Component {
    state = {
        isBookmarked: this.props.is_bookmarked
    };

    onPress = () => {
        let isBookmarked = !this.state.isBookmarked;
        this.setState({isBookmarked});
        this.animate();
    };

    animate = () => {
        Animated.spring(this.animatedValue, {
            toValue: 1.3,
            tension: 100,
            friction: 3,
        }).start(() => {
            Animated.spring(this.animatedValue, {
                toValue: 1,
                tension: 100,
            }).start();
        });
    };

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    render() {
        let BookMarkIcon = null;
        const animatedStyle = {
            transform: [{ scale: this.animatedValue}]
        };
        if (this.state.isBookmarked) {
            BookMarkIcon = <Icon name={"bookmark"} style={{fontSize: 27, color: "#FFB72B"}}/>;
        } else {
            BookMarkIcon = <Icon name={"bookmark-o"} style={{fontSize: 27}}/>;
        }
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <Animated.View style={animatedStyle}>
                    {BookMarkIcon}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
};