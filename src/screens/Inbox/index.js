import InboxScreen from "./Inbox";
import {createStackNavigator, createAppContainer} from "react-navigation";
import ChatConversations from "../../components/Chat/Chat";
const InboxNavigator = createStackNavigator({
    Chat : {
        screen: ChatConversations
    },
    Ibox :{
        screen: Inbox,
    }
    
})
export default createAppContainer(InboxNavigator);
// export default InboxScreen;