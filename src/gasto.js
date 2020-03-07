import React, { Component } from 'react';
import { modificarGasto, eliminarGasto } from './actions/gastos';

class Gasto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modificar: 0,
        };
    }

    render() {
        const { editando, gasto, setEditar } = this.props;
        const { modificar } = this.state;

        if (editando) {
            return <div key={gasto.id} className='gasto'>
                <input value={modificar} onChange={(evt) => {
                    const newValue = evt.currentTarget.value;
                    this.setState({
                        modificar: newValue,
                    });
                }} />
                <button onClick={() => {
                    setEditar(null);
                    this.setState({
                        modificar: 0,
                    });
                }}>Cancelar</button>
                <button onClick={() => {
                    this.props.modificarGasto(gasto.id, modificar)
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
    }
}

const mapStateToProps = (state, ownProps) => {
    const gasto = state.gastos.lista.find(gasto => gasto.id === ownProps.id);
    return {
        gasto,
    };
};

const mapDispatchToProps = {
  modificarGasto,
  eliminarGasto,
}

export default connect(mapStateToProps, mapDispatchToProps)(Gasto);