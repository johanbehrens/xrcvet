import buildActionName from '../../redux/build-action-name';

const initialState = {
    race: {},
    availableRaces: [],
    races: []
};

const SET_RACE = buildActionName('raceView', 'SET_RACE');
const SET_RACES = buildActionName('raceView', 'SET_RACES');
const SET_AVAILABLE_RACES = buildActionName('raceView', 'SET_AVAILABLE_RACES');

export function setRace(auth) {
    return {
        type: SET_RACE,
        race: auth
    }
}

export function setRaces(races) {
    return {
        type: SET_RACES,
        races: races
    }
}

export function setAvailableRaces(races) {
    return {
        type: SET_AVAILABLE_RACES,
        races: races
    }
}

export const setRaceAndRefresh = (name,file) => dispatch =>{
    if(!file){
        dispatch(addRace(name));
    }
    else {
        dispatch(importRace(name, file));
    }
}

export const importRace = (name, file) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let importHorsesPath = "importHorses"
    fetch(`${myApiUrl}/${importHorsesPath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,file})
    })
        .then(function(response) {
            response.json().then(function(json){
                window.location.href = '/race/' + json.race + '/search';
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const addRace = name => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let addracePath = "addrace"
    fetch(`${myApiUrl}/${addracePath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})
    })
        .then(function(response) {
            response.json().then(function(json){
                    window.location.href = '/race/' + json.race + '/search';
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const getRaces = () => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let getracesPath = "getraces"
    fetch(`${myApiUrl}/${getracesPath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(races){
                dispatch(setRaces(races));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const getRace = (raceid) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let getracesPath = `race/${raceid}`
    fetch(`${myApiUrl}/${getracesPath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(races){
                dispatch(setRace(races.race));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const getRacesToImport = (raceid) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let getracesPath = `getracestoimport`
    fetch(`${myApiUrl}/${getracesPath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(races){
                dispatch(setAvailableRaces(races.races));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

const raceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RACE:
            return {
                ...state,
                race: action.race
            };
        case SET_RACES:
            return {
                ...state,
                races: action.races
            };
        case SET_AVAILABLE_RACES:
            return {
                ...state,
                availableRaces: action.races
            };
        default:
            return state;
    }
};

export default raceReducer;
