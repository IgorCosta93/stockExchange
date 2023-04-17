import { connect } from 'react-redux';
import UsersWrapper from "../components/general/UsersWrapper";
import { UPDATE_USER_PASSWORD, GET_USERS } from "../store/actions/users";

const mapStateToProps = state => {
    return {
        users: state.usersR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GET_USERS: body => dispatch(GET_USERS(body)),
        UPDATE_USER_PASSWORD: body => dispatch(UPDATE_USER_PASSWORD(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersWrapper);