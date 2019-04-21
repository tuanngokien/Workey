import {Dimensions} from "react-native";

export const TABS = {
    Home: "HOME",
    Inbox: "INBOX",
    Search: "SEARCH",
    Settings: "SETTINGS",
    Notification: "NOTIFICATION"
};

export const TABBAR_ICONS = {
    [TABS.Home]: "home",
    [TABS.Inbox]: "inbox",
    [TABS.Search]: "search",
    [TABS.Settings]: "settings",
    [TABS.Notification]: "bell",
};

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const MAIN_COLOR = "#07333C";