import { AGREGAR_GASTO, ELIMINAR_GASTO, MODIFICAR_GASTO } from "../actions/types/gastos";

const INITIAL_STATE = {
    total: 0,
    lista: [],
};

export default function (state, action) {
    if (!state) {
        return INITIAL_STATE;
    }

    if (!action || !action.type) {
        return state;
    }

    switch(action.type) {
        case AGREGAR_GASTO:
            return {
                ...state,
                total: state.total + parseInt(action.payload.gasto, 10),
                lista: [
                    ...state.lista,
                    {
                        id: Math.floor((Math.random() * 100000)),
                        gasto: action.payload.gasto,
                    },
                ],
            };
        case ELIMINAR_GASTO:
            const gasto = state.lista.find(gasto => gasto.id === action.payload.id);
            const index = state.lista.findIndex(gasto => gasto.id === action.payload.id);
            const nuevaLista = [...state.lista];
            nuevaLista.splice(index, 1);

            return {
                ...state,
                total: state.total - parseInt(gasto.gasto, 10),
                lista: nuevaLista,
            }; 
        case MODIFICAR_GASTO:
            const gastoAModificar = state.lista.find(gasto => gasto.id === action.payload.id);
            const ix = state.lista.findIndex(gasto => gasto.id === action.payload.id);
            const nuevaListaModificacion = [...state.lista];
            nuevaListaModificacion[ix] = {
                gasto: action.payload.gasto,
                id: action.payload.id,
            };

            return {
                ...state,
                total: state.total - parseInt(gastoAModificar.gasto, 10) + parseInt(action.payload.gasto, 10),
                lista: nuevaListaModificacion,
            }; 
        default:
            return state;
    }
}