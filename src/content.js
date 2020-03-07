import React from 'react';
import { connect } from 'react-redux';
import Notificacion from './notificacion';
import { modificarIngresos } from './actions/ingresos';
import { mostrarNotificacion } from './actions/notificaciones';
import { reset } from './actions/general';
import Gastos from './gastos';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingresos: 0,
        };
        this.modificarIngresos = this.modificarIngresos.bind(this);
        this.cambiarIngresos = this.cambiarIngresos.bind(this);
    }

    modificarIngresos(evt) {
        const newValue = evt.currentTarget.value;
        this.setState({
            ingresos: newValue,
        })
    }    

    cambiarIngresos() {
        this.props.modificarIngresos(this.state.ingresos);
        this.props.mostrarNotificacion('Ingreso agregado');
    }

    render() {
        const { ingresos } = this.state;
        const { ingresosRedux, gastos } = this.props;
        return <div>
            Ingresos: <input value={ingresos} onChange={this.modificarIngresos} />
            <button onClick={this.cambiarIngresos}>Submit</button>
            <button onClick={this.props.reset}>Reiniciar</button>
            <div className='summary'>
                <div>Ingresos guardados: {ingresosRedux}</div>
                <div>Gastos realizados: {gastos}</div>
                <div>Flujo: {ingresosRedux - gastos}</div>
            </div>
            <Gastos />
            <Notificacion />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        ingresosRedux: state.ingresos.ingresos,
        gastos: state.gastos.total,
    };
};

const mapDispatchToProps = {
    modificarIngresos,
    reset,
    mostrarNotificacion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);