import InboxScreen from "./Inbox";
import { createStackNavigator } from "react-navigation";
import ChatConversations from "../../components/Chat/Chat";
import {connect} from "react-redux";

const ReduxChatConversations = connect(
    (state) => ({
        user: state.auth.user,
    })
)(ChatConversations);

const InboxNavigator = createStackNavigator({
    Chat: {
        screen: ReduxChatConversations
    },
    Inbox: {
        screen: InboxScreen,
    },
    },
    {
        initialRouteName: "Inbox",
        headerMode:"none"

    });
export default InboxNavigator;
// export default InboxScreen;