import { connect } from 'react-redux';
import HeaderView from './header-view';
import { logoutAndRedirect } from '../login/login-reducer';

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authentication.isAuthenticated,
        race: state.race.race,
        horse: state.horse.horse
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(logoutAndRedirect());
            window.location.href = '/login';
        }
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderView);

export default HeaderContainer;
