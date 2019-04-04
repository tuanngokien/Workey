import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {DEVICE_WIDTH} from "../../constants";
import JobCard from "../../components/JobCard";
import Carousel from 'react-native-snap-carousel';
import {Data} from "./data";

export const styles = StyleSheet.create({
    titleContainer: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "#000000",
        paddingHorizontal: "5%",
        paddingTop: "3%",
        paddingBottom: "2%"
    }
});





export default class TopEmployersContainer extends React.Component {
    _renderItem({item, index}) {
        return (
            <JobCard key={index} {...item}/>
        );
    }

    render() {
        return (
            <View>
                <Text style={styles.titleContainer}>Top Employers</Text>
                <View styles={{borderWidth: 2, borderColor: "#000000"}}>
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        layout={'default'}
                        style={{backgroundColor: "#000000"}}
                        data={Data}
                        activeSlideAlignment={"start"}
                        renderItem={this._renderItem}
                        sliderWidth={DEVICE_WIDTH}
                        itemWidth={275}
                        itemHeight={70}
                        contentContainerCustomStyle={{
                            marginLeft: "5%",
                        }}
                        slideStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: 75,
                            backgroundColor: "transparent",
                            elevation: 0,
                        }}
                    />
                </View>
            </View>
        );
    }
}