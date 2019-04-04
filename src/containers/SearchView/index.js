import React from "react";
import {Text, StyleSheet, View, Image, FlatList} from "react-native";
import TabView from "../../components/TabView";
import {DEVICE_WIDTH} from "../../constants";
import Carousel from 'react-native-snap-carousel';
import Banner1 from "../../assets/images/banner/2.png";
import {ColoredDivider, Divider} from "../../components/Divider";
import CategoryCard from "../../components/CategoryCard";
import {JobList} from "../../components/CategoryCard/Data";
import Icon from "react-native-vector-icons/Feather";
import Slider from "../../components/Slider";

const ViewWidth = DEVICE_WIDTH * 0.9
const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        borderRadius: 8,
    },
    firstContainer: {
        position: "absolute",
        top: -35,
        width: ViewWidth,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "5%",
        marginVertical: 6,
    },
    tabTitle: {
        fontSize: 16,
        color: "#000000",
        fontFamily: "Nunito-Bold",
    },
    mapTitleContainer: {
        flexDirection: "row",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: 0,
        zIndex: 10,
        width: ViewWidth,
    }
})

export default class SearchViewContainer extends React.Component {
    _renderItem({item, index}) {
        return (
            <Image source={Banner1} resizeMode={"contain"} style={{width: ViewWidth * 0.8, borderRadius: 8}}/>
        );
    }

    render() {
        return (
            <View style={{position: "relative"}}>
                <TabView style={[styles.container, styles.firstContainer]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.tabTitle}>Categories</Text>
                        <Icon name={"align-right"} size={15}/>
                    </View>
                    <ColoredDivider/>
                    <FlatList
                        data={JobList}
                        renderItem={({item}) => <CategoryCard {...item}/>}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={4}
                        style={{marginTop: 5, marginBottom: 10}}
                    />
                </TabView>
                <Divider height={160}/>
                <View style={[styles.container, {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: "12%"}]}>
                    <Slider slideColor={"rgba(114, 3, 193, .4)"} backgroundTextColor={"rgba(113, 4, 194, .6)"}
                            label={"K $"} chartTitle={"Salary Expectations"} maxValue={50} defaultValue={32.5}/>
                    <Slider slideColor={"rgba(193, 3, 88, .4)"} backgroundTextColor={"rgba(193, 3, 88, .6)"}
                            label={" years"} chartTitle={"Work Experience"} maxValue={15} defaultValue={13}/>
                    <Slider slideColor={"rgba(3, 193, 137, .45)"} backgroundTextColor={"rgba(3, 193, 137, .7)"}
                            labelContainer={["No Degree", "Bachelor", "Master", "Doctor"]}
                            chartTitle={"Degree Requirement"} defaultValue={2}/>
                </View>
                {/*<Divider height={10}/>*/}
                {/*<View style={[styles.container, {backgroundColor: "transparent", height: 189.5}]}>*/}
                {/*    <Carousel*/}
                {/*        ref={(c) => {*/}
                {/*            this._carousel = c;*/}
                {/*        }}*/}
                {/*        layout={'default'}*/}
                {/*        data={[1, 2, 3, 4]}*/}
                {/*        activeSlideAlignment={"start"}*/}
                {/*        renderItem={this._renderItem}*/}
                {/*        sliderWidth={ViewWidth}*/}
                {/*        itemWidth={ViewWidth * 0.85}*/}
                {/*        inactiveSlideScale={1}*/}
                {/*        contentContainerCustomStyle={{*/}
                {/*            shadowColor: "rgba(0, 0, 0, 1)",*/}
                {/*        }}*/}
                {/*        slideStyle={{*/}
                {/*            justifyContent: "center",*/}
                {/*            backgroundColor: "transparent",*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</View>*/}
            </View>
        )
    }
}