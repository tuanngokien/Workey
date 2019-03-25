import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import TopNavigator from "../../components/TopNavigator/TopNavigator"
import { SearchBar } from "react-native-elements"

let styles = StyleSheet.create({
    containerSearchBar: {
        backgroundColor: "#E8EAEE",
        paddingHorizontal: 10,
    },
    containerNav: {
        borderBottomColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 0.5,
    },
    containerInputSearch: {
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 3,

    }


})
class InboxScreen extends React.Component {
    state = {
        search: "",
    }
    // static navigationOptions = {
    //     header: null,
    // };

    updateSearch = search => {
        this.setState({ search });
    }
    render() {
        return (
            <View>
                <View style={styles.containerNav}>
                    <TopNavigator
                        containerStyle={{
                            backgroundColor: "white",
                            paddingTop: 20,
                        }}
                        tilte={"Chat"}
                        titleStyle={{
                            fontSize: 15,
                            fontFamily: ""
                        }} />
                </View>
                <View>
                    <SearchBar placeholder="Type here..."
                        onChangeText={this.updateSearch}
                        platform={"android"}
                        value={this.state.search}
                        round={true}
                        underlineColorAndroid={"#DDE1E4"}
                        containerStyle={styles.containerSearchBar}
                        inputContainerStyle={{
                            backgroundColor: "white",
                            borderRadius: 22,
                            paddingHorizontal: 2
                            // marginLeft : 10,
                            // marginRight:10,
                        }}
                    />
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}

export default InboxScreen;