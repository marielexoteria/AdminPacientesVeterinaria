import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Cita extends Component {
    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    }

    render() { 

        //haciendo destructuring del objeto info
        const {mascota, propietario, fecha, hora, sintomas} = this.props.info;

        return (  
            <div className = "media mt-3">
                <div className = "media-body">
                    <h3 className = "mt-0">{mascota}</h3>
                    <p className = "card-text"><span>Nombre del dueño:</span> {propietario}</p>
                    <p className = "card-text"><span>Fecha:</span> {fecha}</p>
                    <p className = "card-text"><span>Hora:</span> {hora}</p>
                    <p className = "card-text"><span>Síntomas: </span></p>
                    <p className = "card-text">{sintomas}</p>

                    <button className = "btn btn-danger" onClick = {this.eliminarCita}>Borrar cita</button>

                </div>
            </div>
        );
    }
}

//usando PropTypes para documentar el proyecto
Cita.propTypes = {
    info: PropTypes.shape({ //usando shape para detallar el tipo de datos de cada parte del objeto
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    borrarCita: PropTypes.func.isRequired
}

 
export default Cita;