import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarGasto, eliminarGasto, modificarGasto } from './actions/gastos';

import './App.css';

function Gastos() {
    const [gasto, setGasto] = useState(0); 
    const [modificar, setModificar] = useState(0); 
    const [gastoAEditar, setGastoAEditar] = useState(null);
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
                const editando = gastoAEditar === gasto.id;

                if (editando) {
                    return <div key={gasto.id} className='gasto'>
                        <input value={modificar} onChange={(evt) => {
                            const newValue = evt.currentTarget.value;
                            setModificar(newValue);
                        }} />
                        <button onClick={() => {
                            setGastoAEditar(null);
                            setModificar(0);
                        }}>Cancelar</button>
                        <button onClick={() => {
                            dispatch(modificarGasto(gasto.id, modificar))
                            setModificar(0);
                            setGastoAEditar(null);
                        }}>Modificar</button>
                    </div>;
                }
                return <div key={gasto.id} className='gasto'>
                    {gasto.gasto}
                    <button onClick={() => {
                        setGastoAEditar(gasto.id);
                    }}>Editar</button>
                    <button onClick={() => {
                        dispatch(eliminarGasto(gasto.id))
                    }}>Eliminar</button>
                </div>;
            })}
        </div>
    </div>;
}

export default Gastos;