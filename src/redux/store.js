import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
