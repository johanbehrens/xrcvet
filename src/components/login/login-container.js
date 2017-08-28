import { connect } from 'react-redux';
import LoginView from './login-view';
import { setAuthenticationAndRefresh } from './login-reducer';


function onSubmit(e, name, password, dispatch){
    e.preventDefault();
    const form = e.target.form;
    let myApiUrl = "http://proxy17.remot3.it:35648/api"
    let usersPath = "authenticate"
    fetch(`${myApiUrl}/${usersPath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, password})
    })
    .then(function(response) {
        response.json().then(function(json){
            dispatch(setAuthenticationAndRefresh(json));
            if(json && json.success === true) {
                window.location.href = '/';
            }
            return ;
        });
    })
    .catch(function(err){
        console.log(err);
    });
};

const mapStateToProps = state => {
    return {
        name: '',
        password: '',
        options: {
            email: {
                label: "Email address",
                placeholder: "Email"
            },
            password: {
                label: "Password",
                placeholder: "Password"
            },
            location: {
                label: "Location",
                placeholder: "localhost"
            },
            submitButton: {
                text: "Submit"
            }
        },
        message: state.authentication.message,
        showMessage: !state.authentication.isAuthenticated && state.authentication.message !== undefined
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (e, name, password) => {
            onSubmit(e, name, password, dispatch);
        }
    };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;
