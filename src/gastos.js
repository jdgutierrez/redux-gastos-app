import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarGasto } from './actions/gastos';
import GastosItem from './gastosItem';

import './App.css';


function Gastos() {
    const [gasto, setGasto] = useState(0); 
    const dispatch = useDispatch();
    const listaGastos = useSelector(state => state.gastos.lista);

    return <div className='gastos'>
        Gastos:
        <div className='agregar'>
            <input value={gasto} onChange={(evt) => {
                const newValue = evt.currentTarget.value;
                setGasto(newValue);
            }} />
            <button onClick={() => {
                dispatch(agregarGasto(gasto));
                setGasto(0);
            }}>Agregar</button>
        </div>
        <div className='listado'>
            {listaGastos.map(gasto => {
                return <GastosItem gasto={gasto} />
            })}
        </div>
    </div>;
}

export default Gastos;