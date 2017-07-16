import { connect } from 'react-redux';
import LoginView from './login-view';
import { setAuthenticationAndRefresh } from './login-reducer';

function onChange(e){

};

function onSubmit(e, dispatch, t){
    e.preventDefault();

    let myApiUrl = "http://localhost:8080/api"
    let usersPath = "authenticate"
    fetch(`${myApiUrl}/${usersPath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:e.target.form.name.value, password:e.target.form.password.value})
    })
    .then(function(response) {
        var r = response.json().then(function(json){
            dispatch(setAuthenticationAndRefresh(json));
            t.props.history.push( '/' );
            return ;
        });
    })
    .catch(function(err){
        console.log(err);
    });
};

const mapStateToProps = state => {
    return {
        options: {
            email: {
                label: "Email address",
                placeholder: "Email"
            },
            password: {
                label: "Password",
                placeholder: "Password"
            },
            checkbox: {
                text: "Check me out"
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
        onChange,
        onSubmit: (e, t) => {
            onSubmit(e, dispatch, t);
        }
    };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;
