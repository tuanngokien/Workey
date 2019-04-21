import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import ListItem from "./ListItem";


const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
    }
});

export default class CriterionList extends React.Component {
    renderItem = ({item}) => {
        return <ListItem text={item}/>
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.data}
                          renderItem={this.renderItem}
                          keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
};