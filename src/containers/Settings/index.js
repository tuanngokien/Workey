import SettingsContainer from './Settings';
import {connect} from "react-redux";
import {signOut} from "../../actions/auth";

export default connect(
    null,
    {signOut},
)(SettingsContainer);
