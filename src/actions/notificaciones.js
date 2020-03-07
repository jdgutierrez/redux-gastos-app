import * as ActionTypes from './types/notificaciones';

export const mostrarNotificacion = () => {
    return {
        type: ActionTypes.MOSTRAR_NOTIFICACION,
    };
};

export const esconderNotificacion = () => {
    return {
        type: ActionTypes.ESCONDER_NOTIFICACION,
    };
};