import React from 'react';
import { connect } from 'react-redux';
import Notificacion from './notificacion';
import { modificarIngresos } from './actions/ingresos';
class Content extends React.Component {
    render() {
        const { ingresos, modificarIngresos } = this.props;
        return <div>
            Ingresos: <input value={ingresos} onChange={(evt) => {
                const newValue = evt.currentTarget.value;
                modificarIngresos(newValue);
            }} />
            <Notificacion />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        ingresos: state.ingresos.ingresos,
    };
};

const mapDispatchToProps = {
    modificarIngresos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);