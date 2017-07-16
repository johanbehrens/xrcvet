import { connect } from 'react-redux';
import HomeView from './home-page-view';
import { logoutAndRedirect } from '../login/login-reducer';

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (t) => {
            dispatch(logoutAndRedirect());
            t.props.history.push('/');
        }
    };
};

const HomeContainer = connect(null, mapDispatchToProps)(HomeView);

export default HomeContainer;
