import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarGasto } from './actions/gastos';
import GastosItem from './gastosItem';
import debounce from 'lodash/debounce';

import './App.css';

function Gastos() {
    // const [gasto, setGasto] = useState(0); 
    const dispatch = useDispatch();
    const listaGastos = useSelector(state => state.gastos.lista);
    const gasto = useSelector(state => state.gastos.gasto);
    const agregarGastoDebounced = debounce(actualizarGasto, 500);

    function actualizarGasto (valor) {
        dispatch(agregarGasto(valor));
    }

    return <div className='gastos'>
        Gastos:
        <div className='agregar'>
            <input value={gasto} onChange={(evt) => {
                const newValue = evt.currentTarget.value;
                agregarGastoDebounced(newValue);
            }} />
            <button onClick={() => {
                dispatch(agregarGasto(gasto));
            }}>Agregar</button>
        </div>
        <div className='listado'>
            {listaGastos.map(gasto => {
                return <GastosItem key={gasto.id} gasto={gasto} />
            })}
        </div>
    </div>;
}

export default Gastos;