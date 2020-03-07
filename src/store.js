import { createStore, applyMiddleware, compose } from 'redux';
import reductorRaiz from './reducers/reducers';
import thunk from 'redux-thunk';
import { esconderNotificacionMiddleware } from './notificacionMiddleware';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['reductor'],
};

const persistedReducer = persistReducer(persistConfig, reductorRaiz);

const middleware = [thunk, esconderNotificacionMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    {
        reductor: [],
    },
    composeEnhancer(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default store;