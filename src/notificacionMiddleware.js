import { esconderNotificacion } from './actions/notificaciones';
import { MOSTRAR_NOTIFICACION } from './actions/types/notificaciones';

export const esconderNotificacionMiddleware = store => next => action => {
    next(action);

    if (action.type === MOSTRAR_NOTIFICACION) {
        setTimeout(() => {
            next(esconderNotificacion());
        }, 5000);
    }
};