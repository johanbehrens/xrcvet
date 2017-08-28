import buildActionName from '../../redux/build-action-name';

const initialState = {
    isAuthenticated: sessionStorage.jwt ? true : false,
    authToken : undefined,
    message: undefined,
    session: !!sessionStorage.jwt,
};

const SET_AUTHENTICATION = buildActionName('loginView', 'SET_AUTHENTICATION');
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export function setAuthentication(auth) {
    return {
        type: SET_AUTHENTICATION,
        auth: auth
    };
}

export function requestHeaders() {
    return {'AUTHORIZATION': sessionStorage.jwt }
}

export function logout(){
    return {type: LOG_OUT_SUCCESS}
}

export function logoutAndRedirect() {
    return function(dispatch) {
        sessionStorage.clear();
        dispatch(logout());
    };
}

export function memberInfo(){
    let myApiUrl = "http://proxy17.remot3.it:35648/api"
    let usersPath = "memberinfo"
    fetch(`${myApiUrl}/${usersPath}`, {
        method: 'Get',
        headers: requestHeaders()
    })
        .then(function(response) {
            response.json().then(function(done)
            {
                return done;
            });
        })
        .catch(function(err){
            console.log(err);
        });
}

export function setAuthenticationAndRefresh(auth) {
    return function(dispatch) {

        dispatch(setAuthentication(auth));

        if(auth.success === true) {
            sessionStorage.setItem('jwt', auth.token);
        }

    };
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: action.auth.success,
                authToken: action.auth.token,
                message: action.auth.msg
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                authToken: '',
                message: ''
            };
        default:
            return state;
    }
};

export default loginReducer;
