import { MODIFICAR_INGRESOS } from './types/ingresos';

export const modificarIngresos = (ingresos) => {
    return {
        type: MODIFICAR_INGRESOS,
        payload: {
            ingresos,
        },
    };
}