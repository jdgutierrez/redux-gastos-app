import { MODIFICAR_INGRESOS } from '../actions/types/ingresos';

const INITIAL_STATE = {
    ingresos: 0,
};

export default function (state, action) {
    if (!state) {
        return INITIAL_STATE;
    }

    if (!action || !action.type) {
        return state;
    }

    const handlers = {
        [MODIFICAR_INGRESOS](state, action) {
            return {
                ...state,
                ingresos: action.payload.ingresos,
            };
        },
    };

    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    }

    return state;
}