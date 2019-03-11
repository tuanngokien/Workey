import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import TopNavigator from "../../components/TopNavigator";
import CategoryCard from "../../components/CategoryCard";
import {JobList} from "../../components/CategoryCard/Data";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f8f9",
        height: "100%",
    }
});


export default class CategoriesScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <TopNavigator/>,
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
                    contentContainerStyle={{alignItems: "center"}}
                />
            </View>
        );
    }
}



