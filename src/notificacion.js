import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mostrarNotificacion, esconderNotificacion } from './actions/notificaciones';

class Notificacion extends Component {
    render() {
        const {
            showNotification, 
        } = this.props; 

        return <div>
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