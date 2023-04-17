import { connect } from 'react-redux';
import UsersScreensWrapper from "../components/general/UsersScreensWrapper";
import { GET_USERS_SCREENS, ADD_USER_SCREEN } from "../store/actions/usersScreens";

const mapStateToProps = state => {
    return {
        screens: state.usersScreensR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GET_USERS_SCREENS: body => dispatch(GET_USERS_SCREENS(body)),
        ADD_USER_SCREEN: body => dispatch(ADD_USER_SCREEN(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreensWrapper);