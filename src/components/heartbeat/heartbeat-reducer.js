import buildActionName from '../../redux/build-action-name';

const initialState = {
    monitors: [],
    selectedMonitor: undefined
};

const SET_MONITORS = buildActionName('hearbeat', 'SET_MONITORS');
const SET_MONITOR = buildActionName('hearbeat', 'SET_MONITOR');

export function setMonitors(monitors) {
    return {
        type: SET_MONITORS,
        monitors: monitors
    };
}

export const setIp = (id, ip) => dispatch => {
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let setIpPath = "heartBeat/setIp"
    fetch(`${myApiUrl}/${setIpPath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({identifier:id,ip:ip,port:8090})
    })
        .then(function(response) {
            //alert('saved');
            dispatch(refreshMonitors);
        })
        .catch(function(err){
            console.log(err);
        });
}

function setMonitor(id, ip) {
    return {
        type: SET_MONITOR,
        ip: ip,
        id: id
    };
}

export const setMonitorAndRefresh = (id, ip) => dispatch => {
    dispatch(setMonitor(id, ip));
};

export const refreshMonitors = dispatch => {
    const hostname = window && window.location && window.location.hostname;

    let myApiUrl = `http://${hostname}:8080/api`
    let getMonitors = "heartBeat/getAllClients";

    fetch(`${myApiUrl}/${getMonitors}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(setMonitors(result.clients));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

const heartBeatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MONITORS:
            return {
                ...state,
                monitors: action.monitors,
                selectedMonitor: undefined
            };
        case SET_MONITOR:
            var monitors = state.monitors.slice(0);
            var m = monitors.find(m => m.identifier === action.id);
            m.ip = action.ip;
            return {
                ...state,
                monitors: monitors,
                selectedMonitor: m
            };
        default:
            return state;
    }
};

export default heartBeatReducer;
