import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    eliminarGasto,
    agregarGasto,
    modificarGasto,
} from './actions/gastos';

class GastosItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modificar: 0,
            gastoAEditar: null
        }
    }
    
    render() {
        const { modificar, gastoAEditar } = this.state;
        const { gasto } = this.props;
        const editando = gastoAEditar === gasto.id;

        if (editando) {
            return <div key={gasto.id} className='gasto'>
                <input value={modificar} onChange={(evt) => {
                    const newValue = evt.currentTarget.value;
                    this.setState({
                        modificar: newValue,
                    });
                }} />
                <button onClick={() => {
                    this.setState({
                        modificar: 0,
                        gastoAEditar: null,
                    });
                }}>Cancelar</button>
                <button onClick={() => {
                    this.props.modificarGasto(gasto.id, modificar)
                    this.setState({
                        modificar: 0,
                        gastoAEditar: null,
                    });
                }}>Modificar</button>
            </div>;
        }
        return <div key={gasto.id} className='gasto'>
            {gasto.gasto}
            <button onClick={() => {
                this.setState({
                    gastoAEditar: gasto.id,
                });
            }}>Editar</button>
            <button onClick={() => {
                this.props.eliminarGasto(gasto.id)
            }}>Eliminar</button>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = {
    eliminarGasto,
    agregarGasto,
    modificarGasto,
}

export default connect(mapStateToProps, mapDispatchToProps)(GastosItem);