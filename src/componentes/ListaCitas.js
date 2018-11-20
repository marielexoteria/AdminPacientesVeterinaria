import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí'; //declarando una variable y haciendo un if statement usando el formato "ternario"; if object... ==== 0 then display "no hay citas", otherwise display "administra tus citas aquí"


        return (
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className = "card-title text-center">{mensaje}</h2>
                    
                    <div className = "lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita 
                                key = {cita} //pasando el unique ID de la cita
                                info = {this.props.citas[cita]} //pasando la info de la cita basado en el unique ID
                                borrarCita = {this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

//usando PropTypes para documentar el proyecto
ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;