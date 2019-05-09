import React from "react";
import { View, StyleSheet, Image, Text, Alert, ScrollView ,ImageBackground,TouchableOpacity} from "react-native";
import Conversations from "../../screens/Inbox/data"
import TopNavigator from "../TopNavigator";
import goBack from "../../assets/images/icons/goback.png"
import bgImage from "../../assets/images/background/sky.png"
import { TouchableHighlight } from "react-native-gesture-handler";
// import console = require("console");
let styles = StyleSheet.create({
  containerHeader :{
    // backgroundColor:"red",
    height : 70,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }

})
class HeaderChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    console.log(this.props.navigation);
  }
  tranferInbox=()=>()=>{
    this.props.navigation.navigate('Inbox')
  }
  render(){
    return(
      <View style={styles.containerHeader}>
      <ImageBackground source={bgImage} style={{width:'100%', height:'100%'}}>
        <View style={{flexDirection:"row",paddingTop :40 }}>
        <View style={{width:"10%"}}>
        {/* <View style={{flex: 0.2, justifyContent: "center",paddingTop :45}}> */}
                    <TouchableOpacity style={{width: 30, height: 20}} onPress={this.tranferInbox()}>
                    <Image source={goBack} style={{width: 30, height: 20, resizeMode: "contain"}}/>
                    </TouchableOpacity>
        </View>
        <View style={{width:"80%"}}>
          <Text style={{alignSelf:"center",color:"white",fontSize:20,marginBottom:5}}>{this.props.name}</Text>
        </View>
        <View style={{width:"10%"}}></View>
        </View>
        </ImageBackground>
      </View>
    )
  }
}
export default HeaderChat;