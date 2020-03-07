import { combineReducers } from 'redux';
import miPrimerReductor from './miPrimerReductor';
import ingresosReductor from './ingresosReductor';

const reducers = {
    reductor: miPrimerReductor,
    ingresos: ingresosReductor, 
    // gastos: gastosReductor,
    // usuarios: usuariosReductor,
};

export default combineReducers(reducers);
