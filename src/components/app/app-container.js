import { connect } from 'react-redux';
import AppView from './app-view';
import { getRaces } from '../race/race-reducer';

const mapDispatchToProps = dispatch => {
    return {
        getRaces: () => {
            dispatch(getRaces());
        }
    };
};

const AppContainer = connect(null, mapDispatchToProps)(AppView);

export default AppContainer;
