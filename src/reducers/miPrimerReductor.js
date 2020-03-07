import * as ActionTypes from '../actions/types/notificaciones';

const INITIAL_STATE = {
    mostrarNotification: false,
};

export default function (state, action) {
    if (!state) {
        return INITIAL_STATE;
    }

    if (!action || !action.type) {
        return state;
    }

    switch(action.type) {
        case ActionTypes.MOSTRAR_NOTIFICACION:
            return {
                ...state,
                mostrarNotification: true,
            };
        case ActionTypes.ESCONDER_NOTIFICACION: 
            return {
                ...state,
                mostrarNotification: false,
            };
        default:
            return state;
    };
};