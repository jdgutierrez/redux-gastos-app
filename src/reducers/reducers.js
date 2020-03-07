import { combineReducers } from 'redux';
import miPrimerReductor from './miPrimerReductor';
import ingresosReductor from './ingresosReductor';
import gastosReductor from './gastosReductor';
import { RESET } from '../actions/types/general';

const reducers = {
    reductor: miPrimerReductor,
    ingresos: ingresosReductor, 
    gastos: gastosReductor,
};

export default function (state, action) {
    if (action.type === RESET) {
        return combineReducers(reducers)(undefined, action);
    }
    return combineReducers(reducers)(state, action);
};
