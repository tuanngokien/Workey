import React from "react";
import {Text, StyleSheet, Image, View, FlatList, TouchableOpacity} from "react-native";
import TabView from "../../components/TabView";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../../constants";
import {ColoredDivider, Divider} from "../../components/Divider";
import CategoryCard from "../../components/CategoryCard";
import {JobList} from "../../components/CategoryCard/Data";
import Icon from "react-native-vector-icons/Feather";
import Slider from "../../components/Slider";
import Spinner from "../../assets/images/icons/spinner.gif";

const ViewWidth = DEVICE_WIDTH * 0.9;
const SpinnerSize = 80;

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
    iconContainer: {
        position: "absolute",
        right: 0,
        bottom: -10,
        backgroundColor: "rgba(44, 29, 235, .7)",
        paddingHorizontal: 12,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        elevation: 0.4,
    },
    icon: {
        fontSize: 30,
        color: "#fff",
    },
});

export default class SearchFilterContainer extends React.Component {
    state = {
        category: -1,
    };

    onCategoryPress = (index) => {
        let category = this.state.category;
        if (index === category) {
            index = -1;
        }
        this.setState({category: index});
    };

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
                        renderItem={({item, index}) => <CategoryCard active={this.state.category === index} {...item}
                                                                     onPress={() => this.onCategoryPress(index)}/>}
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
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={this.props.onSubmit}>
                        <Icon name={"search"} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}