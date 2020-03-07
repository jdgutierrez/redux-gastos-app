import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mostrarNotificacion, esconderNotificacion } from './actions/notificaciones';

import './App.css'

class Notificacion extends Component {
    render() {
        const {
            showNotification, 
            mensaje,
        } = this.props; 

        if (!showNotification) {
            return null;
        }

        return <div className='notificacion'>
            <div>{mensaje}</div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        showNotification: state.reductor.mostrarNotificacion,
        mensaje: state.reductor.mensaje || 'No tienes ningún mensaje en el store de redux',
    };
};

const mapDispatchToProps = {
    mostrarNotificacion,
    esconderNotificacion,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(Notificacion);