import {PUSH_NEW_NOTIFICATION, UNKNOWN} from "./type";

export const pushNewNotification = (notification) => {
    if (notification) {
        return {
            type: PUSH_NEW_NOTIFICATION,
            payload: notification,
        }
    } else {
        return {type: UNKNOWN}
    }
};