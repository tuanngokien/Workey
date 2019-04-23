import React from "react";
import {StyleSheet, View, Text} from "react-native";
import JobCard from "./JobCard";


const styles = StyleSheet.create({
   container: {
       marginHorizontal: "5%"
   }
});

export default class JobResultList extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                {this.props.data.map((item,index) => <JobCard key={index} onPress={this.props.onItemPress} {...item}/>)}
            </View>
        )
    }
}