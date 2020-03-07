import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mostrarNotificacion, esconderNotificacion } from './actions/notificaciones';

class Notificacion extends Component {
    render() {
        const {
            mostrarNotification, 
            showNotification, 
            esconderNotificacion 
        } = this.props; 

        return <div>
            This is content
            <button onClick={mostrarNotification}>Activar notificacion</button>
            <button onClick={esconderNotificacion}>Esconder notificacion</button>
            {showNotification && <div>Mensaje de notificacion</div>}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        showNotification: state.reductor.mostrarNotificacion,
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