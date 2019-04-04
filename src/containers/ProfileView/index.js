import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StackedAreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import TabView from "../../components/TabView";
import {styles as TopEmployerStyles} from "../TopEmployers";
const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        borderRadius: 8,
    },
    titleContainer: TopEmployerStyles.titleContainer,

});

export default class ProfileViewContainer extends React.PureComponent {

    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 640,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 480,
                cherries: 640,
                dates: 400,
            },
        ]

        const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff']
        const keys = ['apples', 'bananas', 'cherries', 'dates']
        const svgs = [
            {onPress: () => console.log('apples')},
            {onPress: () => console.log('bananas')},
            {onPress: () => console.log('cherries')},
            {onPress: () => console.log('dates')},
        ]

        return (
            <View>
                <Text style={styles.titleContainer}>Profile Views</Text>
                <TabView style={styles.container}>
                    <StackedAreaChart
                        style={{height: 120, paddingVertical: 8}}
                        data={data}
                        keys={keys}
                        colors={colors}
                        curve={shape.curveNatural}
                        showGrid={false}
                        svgs={svgs}
                    />
                </TabView>
            </View>

        )
    }
}