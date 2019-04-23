import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {DEVICE_WIDTH} from "../../constants";
import JobCard from "./JobCard";
import Data from "./data";


const ViewWidth = DEVICE_WIDTH * 0.9;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
    },
});

class JobSuggestionsCarousel extends React.Component {
    state = {
        data: Data,
        activeSlideIndex: 0,
    };

    _renderItem({item, index}) {
        return (
            <JobCard {...item}/>
        );
    }

    handleChangeSlide = (index) => {
        this.setState({activeSlideIndex: index})
    };

    render() {
        const {data, activeSlideIndex} = this.state;
        return (
            <View style={{height: 190}}>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    layout={'default'}
                    data={data}
                    activeSlideAlignment={"start"}
                    renderItem={this._renderItem}
                    sliderWidth={DEVICE_WIDTH}
                    itemWidth={ViewWidth * 0.85}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    contentContainerCustomStyle={{
                        marginLeft: "5%",
                        shadowColor: "rgba(0, 0, 0, 1)",
                    }}
                    slideStyle={{
                        justifyContent: "center",
                        backgroundColor: "transparent",
                    }}
                    onSnapToItem={this.handleChangeSlide}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={activeSlideIndex}
                    containerStyle={{backgroundColor: 'transparent', paddingVertical: 3}}
                    dotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: "#185B6C"
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        )
    }
}

export default JobSuggestionsCarousel;