import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

    state = {
        citas: []
    }

    componentDidMount() { //https://reactjs.org/docs/react-component.html#componentdidmount
        const citasLocalStorage = localStorage.getItem('citas'); //getItem obtiene el valor de un elemento previamente agregado al localStorage
        if (citasLocalStorage) ( //si hay algo guardado en el localStorage
            this.setState({
                citas: JSON.parse(citasLocalStorage) //convertir el string a un arreglo
            })
        )

    }

    componentDidUpdate() { //https://reactjs.org/docs/react-component.html#componentdidupdate
        localStorage.setItem( //setItem agrega un elemento al localStorage
            'citas',
            JSON.stringify(this.state.citas) //convierte el arreglo en un string porque localStorage solamente puede almacenar strings
        )
    }

  crearCita = (nuevaCita) => {
    //console.log(cita);
    const citas = [...this.state.citas, nuevaCita]; //creando una copia del state para su modificación (...this.state...) y se le agrega la nueva cita que se creó con el formulario
    console.log(citas);
    this.setState({
        citas //usando object literal enhancement se asigna el valor de la variable citas a la propiedad del state llamada de igual manera
    });
  }

  borrarCita = id => {
      console.log(id);
      //obtener copia del state
      const citasActuales = [...this.state.citas];

      //borrar el elemento del state
      const citas = citasActuales.filter(cita => cita.id !== id); //filter crea un arreglo nuevo basado en el valor que se le pase. Lo que está entre paréntesis es como un forEach, donde se pide que se traigan los registros que NO sean iguales al ID de la cita que queremos borrar

      //actualizar el state
      this.setState({
          citas //object literal enhancement donde la propiedad y la variable se llaman igual
      })
  }

  render() {
    return (
      <div className = "container">
          <Header  
              titulo = {'Administrador de Pacientes de Veterinaria'}
          />
          <div className = "row">
              <div className = "col-md-6">
                  <AgregarCita
                      crearCita = {this.crearCita}
                  />
              </div> 
              <div className = "col-md-6">
                  <ListaCitas 
                      citas = {this.state.citas}
                      borrarCita = {this.borrarCita}
                  />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
