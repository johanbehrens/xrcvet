import { combineReducers } from 'redux';
import authenticationReducer from '../components/login/login-reducer';
import horseReducer from '../components/horse/horse-reducer';
import raceReducer from '../components/race/race-reducer';
import vetCardReducer from '../components/vet/vet-reducer';
import heartBeatReducer from '../components/heartbeat/heartbeat-reducer';

export default combineReducers({
    authentication: authenticationReducer,
    horse: horseReducer,
    race: raceReducer,
    vetCard: vetCardReducer,
    heartBeat: heartBeatReducer
});
