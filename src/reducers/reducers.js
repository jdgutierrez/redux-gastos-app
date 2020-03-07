import { combineReducers } from 'redux';
import miPrimerReductor from './miPrimerReductor';
import ingresosReductor from './ingresosReductor';
import gastosReductor from './gastosReductor';

const reducers = {
    reductor: miPrimerReductor,
    ingresos: ingresosReductor, 
    gastos: gastosReductor,
};

export default combineReducers(reducers);
