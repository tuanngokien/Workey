import React from 'react';
import {View, FlatList, Text, StyleSheet, StatusBar} from 'react-native';
import TopNavigator from "../../components/TopNavigator";
import CategoryCard from "../../components/CategoryCard";
import {JobList} from "../../components/CategoryCard/Data";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#4F5BE3",
        backgroundColor: "#f6f8f9",
        height: "100%",
    },
});


export default class CategoriesScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <TopNavigator title={"Categories"}/>,
        headerStyle: {
            elevation: 0,
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={JobList}
                    renderItem={({item}) => <CategoryCard {...item}/>}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    style={{marginTop: 10}}
                    contentContainerStyle={{alignItems: "center"}}
                />
            </View>

        );
    }
}



