import buildActionName from '../../redux/build-action-name';

const initialState = {
    vetCard: {}
};

const SET_VET_CARD = buildActionName('vetCardReducer', 'SET_VET_CARD');
const SET_VET_CARD_ATTR = buildActionName('vetCardReducer', 'SET_VET_CARD_ATTR');
const CLEAR_VET_CARD = buildActionName('vetCardReducer', 'CLEAR_VET_CARD');

export const clearVetCard = () => ({
    type: CLEAR_VET_CARD
});

export const setVetCardAttr = (attributeName, value) => ({
    type: SET_VET_CARD_ATTR,
    attributeName,
    value
});

export const setVetCard = payload => ({
    type: SET_VET_CARD,
    payload
});

export const loadVetCard = (horseid, leg) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let addhorsePath = `/vetCard/${horseid}/leg/${leg}`
    fetch(`${myApiUrl}/${addhorsePath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(setVetCard(result.vetCard));
            });
        })
        .catch(function(err){
            console.log(err);
            return;
        });
};

export const disqualifyVetCard = (vetCard, horseid, leg) => dispatch =>{
    dispatch(saveVetCard(vetCard, horseid, leg));
};

export const saveVetCard = (vetCard, horseid, leg) => dispatch =>{
    const hostname = window && window.location && window.location.hostname;
    let myApiUrl = `http://${hostname}:8080/api`
    let addhorsePath = "updateVetCard"
    fetch(`${myApiUrl}/${addhorsePath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({horseid,leg,vetCard})
    })
        .then(function(response) {
            response.json().then(function(result){
                dispatch(loadVetCard(horseid, leg));
            });
        })
        .catch(function(err){
            console.log(err);
            return;
        });
};

const vetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VET_CARD_ATTR:
            return {
                ...state,
                vetCard: {
                    ...state.vetCard,
                    [action.attributeName]: action.value
                }
            };
        case SET_VET_CARD:
            return {
                ...state,
                vetCard: action.payload
            };
        case CLEAR_VET_CARD:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default vetReducer;
