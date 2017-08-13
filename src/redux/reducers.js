import { combineReducers } from 'redux';
import authenticationReducer from '../components/login/login-reducer';
import horseReducer from '../components/horse/horse-reducer';
import raceReducer from '../components/race/race-reducer';

export default combineReducers({
    authentication: authenticationReducer,
    horse: horseReducer,
    race: raceReducer
});
