import React from "react"
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten'
import {Avatar} from  "react-native-elements"
let styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 17,
        fontSize:20,
        fontFamily: "FontAwesome",
        color : "black",
        
    },
    bordered: {
        // borderBottomWidth: 1,
        // borderColor: theme.colors.border.base,
        zIndex:2,
        marginTop:75,
    },
    email :{
        fontSize :10,
        fontFamily:"FontAwesome",
        color :"black",
        alignItems :'center'
    },
})
class AvatarUser extends React.Component{
    constructor(props){
        super(props);
        state={

        }
    };
    render() {
     return(
         <View style={[styles.bordered,styles.header]}>
            <View>
            <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        size={160}
                        containerStyle={{
                            borderRadius: 100,
                            borderWidth: 1.5,
                            borderColor: "white"
                        }}
                    />
            </View>
            <View>
                {/* <Text style={styles.email}>{this.props.email}</Text> */}
                <Text style= {styles.header}>{this.props.name}</Text>

            </View>
         </View>
     )
        
    }
}
export default AvatarUser;