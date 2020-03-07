import * as ActionTypes from './types/notificaciones';

export const mostrarNotificacion = (mensaje) => {
    return {
        type: ActionTypes.MOSTRAR_NOTIFICACION,
        payload: {
            mensaje,
        },
    };
};

export const esconderNotificacion = () => {
    return {
        type: ActionTypes.ESCONDER_NOTIFICACION,
    };
};