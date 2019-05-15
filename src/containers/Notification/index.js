import NotificationContainer from "./Notification";
import {connect} from "react-redux";
import {pushNewNotification} from "../../actions/notifications";
export default connect(
    (state) => {
        return {
            user: state.auth.user,
            notifications: state.messaging.notifications
        }
    },
    {pushNewNotification}
)(NotificationContainer)
