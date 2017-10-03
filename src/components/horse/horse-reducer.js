import buildActionName from '../../redux/build-action-name';

const initialState = {
    horses: [],
    searchHorsesText : {text:'',distance:''},
    horse: undefined
};

const SET_HORSES = buildActionName('horseReducer', 'SET_HORSES');
const SET_HORSE = buildActionName('horseReducer', 'SET_HORSE');
const SEARCH_TEXT = buildActionName('horseReducer', 'SEARCH_TEXT');
const ADD_HORSE = buildActionName('horseReducer', 'ADD_HORSE');
const SET_VET_PROP = buildActionName('horseReducer', 'SET_VET_PROP');

export function setHorses(horses) {
    const array=[];

    horses.reduce((arr, item) =>
    {
        if (!array.find(i => {
                return i === parseInt(item.DIST);
            })) array.push(parseInt(item.DIST));
    });

    const result = {
        horses: horses,
        defaultDistance: {text:'',distance: array.sort((a,b) => {return a - b;})[0]}
    };

    return {
        type: SET_HORSES,
        horses: result
    };
}
export function setHorse(auth) {
    return {
        type: SET_HORSE,
        horse: auth
    };
}

export const setVetProp = (prop, value, horseid) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let addhorsePath = "updateHorse"
    fetch(`${myApiUrl}/${addhorsePath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({horseid,prop,value})
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(setHorse(result.horse));
            });
        })
        .catch(function(err){
            console.log(err);
            return;
        });
};



export const getHorses = raceid => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let getracesPath = "gethorses"
    fetch(`${myApiUrl}/${getracesPath}?raceid=${raceid}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(setHorses(result.horses));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const getHorse = (horseid) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let gethorsePath = `horse/${horseid}`
    fetch(`${myApiUrl}/${gethorsePath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(setHorse(result.horse));
            });
        })
        .catch(function(err){
            console.log(err);
        });
};

export const addHorse = (horse,raceid) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let addhorsePath = "addhorse"
    fetch(`${myApiUrl}/${addhorsePath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({raceid,name:horse.name,code:horse.code})
    })
        .then(function(response) {

        })
        .catch(function(err){
            console.log(err);
        });
};

export function addHorses(auth) {
    return {
        type: SET_HORSES,
        horses: auth
    };
}

export function searchText(auth) {
    return {
        type: SEARCH_TEXT,
        searchHorsesText: auth
    };
}

const horseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HORSES:
            return {
                ...state,
                horses: action.horses.horses,
                searchHorsesText: action.horses.defaultDistance
            };
        case SET_HORSE:
            return {
                ...state,
                horse: action.horse
            };
        case SEARCH_TEXT:
            return {
                ...state,
                searchHorsesText: action.searchHorsesText
            };
        default:
            return state;
    }
};

export default horseReducer;
