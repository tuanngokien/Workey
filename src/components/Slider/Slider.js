import React from "react";
import {StyleSheet, View, Text} from "react-native";
import BigSlider from "react-native-big-slider";

const styles = StyleSheet.create({
    container: {
        flex: 0.27,
    },
    sliderContainer: {
        position: "relative",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: 6,
    },
    backgroundText: {
        position: "absolute",
        width: 200,
        top: "30%",
        left: "-113%",
        transform: [{rotate: '-90deg'}],
        fontSize: 15,
    },
    slider: {
        width: "100%",
        height: 200,
        backgroundColor: "transparent",
    },
    titleContainer: {
        marginTop: 10,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderRadius: 18,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    shadow: {
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        elevation: 0.4,
    },
    defaultFont: {
        fontFamily: "Nunito-Bold"
    },
    labelFont: {
        fontSize: 12,
        fontFamily: "Nunito-SemiBold",
        color: "#000000",
    }
});

export default class Slider extends React.Component {
    state = {
        label: "",
        labelContainer: [],
        value: 50,
        showValue: true,
        maxValue: 100,
    };

    componentWillMount() {
        const {label, labelContainer, maxValue, defaultValue: value} = this.props;
        if (labelContainer == null) {
            this.setState({label, maxValue, value});
        } else {
            this.setState({
                labelContainer,
                maxValue: labelContainer.length,
                showValue: false,
                value: value
            });
        }
    }

    onValueChange = (nextValue) => {
        const {labelContainer} = this.state;
        if (labelContainer == null) {
            this.setState({value: parseInt(nextValue)});
        } else {
            this.setState({value: Math.round(nextValue)});
            this.setState({value: Math.round(nextValue)});
        }
    }

    render() {
        const {slideColor, backgroundTextColor, chartTitle} = this.props;
        const {label, labelContainer, value, showValue, maxValue} = this.state;
        return (
            <View style={styles.container}>
                <View style={[styles.sliderContainer, styles.shadow]}>
                    <Text
                        style={[styles.backgroundText, styles.defaultFont, {color: backgroundTextColor}]}>{chartTitle}</Text>
                    <BigSlider
                        style={styles.slider}
                        trackStyle={{backgroundColor: slideColor}}
                        renderLabel={() => <Text></Text>}
                        maximumValue={maxValue}
                        value={value}
                        minimumValue={1}
                        onValueChange={this.onValueChange}
                    />
                </View>

                <View style={[styles.titleContainer, styles.shadow]}>
                    <Text
                        style={[styles.defaultFont, styles.labelFont]}>{showValue ? value + label : labelContainer[value - 1]}</Text>
                </View>
            </View>

        )
    }
}