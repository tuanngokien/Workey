import InboxScreen from "./Inbox";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ChatConversations from "../../components/Chat/Chat";
const InboxNavigator = createStackNavigator({
    Chat: {
        screen: ChatConversations
    },
    Inbox: {
        screen: InboxScreen,
    },
    },
    {
        initialRouteName: "Inbox",
        headerMode:"none"

    })
export default InboxNavigator;
// export default InboxScreen;