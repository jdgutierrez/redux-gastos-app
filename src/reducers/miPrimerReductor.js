import * as ActionTypes from '../actions/types/notificaciones';

const INITIAL_STATE = {
    mostrarNotificacion: false,
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
                mostrarNotificacion: true,
            };
        case ActionTypes.ESCONDER_NOTIFICACION: 
            return {
                ...state,
                mostrarNotificacion: false,
                mensaje: 'No tienes ningún mensaje en el store de redux',
            };
        default:
            return state;
    };
};