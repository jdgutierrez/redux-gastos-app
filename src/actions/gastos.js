import {
    AGREGAR_GASTO, 
    MODIFICAR_GASTO, 
    ELIMINAR_GASTO 
} from "./types/gastos";

export const agregarGasto = (gasto) => {
    return {
        type: AGREGAR_GASTO,
        payload: {
            gasto,
        }
    };
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