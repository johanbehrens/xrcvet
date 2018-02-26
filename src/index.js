import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app-container';
import LogInPage from './components/login/login-container';
import Heartbeat from './components/heartbeat/heartbeat-container';
import HomePage from './components/homePage/home-page-container';
import Header from './components/header/header-container';
import Search from './components/search/search-container';
import NewRace from './components/race/race-container';
import SelectRace from './components/race/select-race-container';
import AddHorse from './components/horse/horse-add-container';
import InfoHorse from './components/horse/horse-info-container';
import Vet from './components/vet/vet-leg-container';
import EditVet from './components/vet/edit-vet-leg-container';
import DisqualifyVet from './components/vet/vet-leg-disqualify-container';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const store = configureStore();
const history = createHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        sessionStorage.jwt ? (
        <Component {...props}/>
        ) : (
        <Redirect to={{
            pathname: '/login'
        }}/>
        )
    )}/>
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <App>
                    <Header history={history}/>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/heartbeat" component={Heartbeat} />
                    <Route path="/newrace" component={NewRace} />
                    <Route path="/selectrace" component={SelectRace} />
                    <Route path="/race/:raceid/search" component={Search} />
                    <Route path="/race/:raceid/addhorse" component={AddHorse} />
                    <Route exact path="/race/:raceid/horse/:horseid" component={InfoHorse} />
                    <Route exact path="/race/:raceid/horse/:horseid/leg/:leg" component={Vet} />
                    <Route exact path="/race/:raceid/horse/:horseid/leg/:leg/Edit" component={EditVet} />
                    <Route exact path="/race/:raceid/horse/:horseid/leg/:leg/disqualify" component={DisqualifyVet} />
                </App>
            </Switch>
    </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
