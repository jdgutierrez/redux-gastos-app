import {
    AGREGAR_GASTO, 
    MODIFICAR_GASTO, 
    ELIMINAR_GASTO 
} from "./types/gastos";
import { mostrarNotificacion } from "./notificaciones";

export const agregarGasto = (gasto) => dispatch => {
    dispatch(mostrarNotificacion('gasto agregado'));
    return dispatch({
        type: AGREGAR_GASTO,
        payload: {
            gasto,
        },
    });
};
export const modificarGasto = (id, gasto) => {
    return {
        type: MODIFICAR_GASTO,
        payload: {
            id,
            gasto,
        }
    };
};
export const eliminarGasto = (id) => {
    return {
        type: ELIMINAR_GASTO,
        payload: {
            id,
        },
    };
};