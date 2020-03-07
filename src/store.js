import { createStore, applyMiddleware, compose } from 'redux';
import reductorRaiz from './reducers/reducers';
import thunk from 'redux-thunk';
import { esconderNotificacionMiddleware } from './notificacionMiddleware';

const middleware = [thunk, esconderNotificacionMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reductorRaiz,
    {
        reductor: [],
    },
    composeEnhancer(applyMiddleware(...middleware)),
);

export default store;