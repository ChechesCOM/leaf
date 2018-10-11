import React, { Component } from 'react';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Hemos recibido sus datos y nos pondremos en contacto.');
    event.preventDefault();
  }
  render() {

    return (
      <div className="App">

        <div className="greenleaf" >

          <h1>Greenleaf</h1>


        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name:
    <input type="text" name="name"  required />
          </label>

          <label>
            E-mail:
              <input type="email" name="e-mail"  required />
          </label>

          <label>
            Telefono:
              <input type="tel" name="telefono"  required />
          </label>

          <label>
            Fecha:
              <input type="date" name="fecha"  required />

          </label>
        <div className="ciudad">
          <label>

            Ciudad y Estado:
                  <select name="estados">

                  <option value="0">Todo México</option>

                  <option value="1">Aguascalientes</option>

                  <option value="2">Baja California</option>

                  <option value="3">Baja California Sur</option>

                  <option value="4">Campeche</option>

                  <option value="5">Coahuila</option>

                  <option value="6">Colima</option>

                  <option value="7">Chiapas</option>

                  <option value="8">Chihuahua</option>

                  <option value="9">Distrito Federal</option>

                  <option value="10">Durango</option>

                  <option value="11">Guanajuato</option>

                  <option value="12">Guerrero</option>

                  <option value="13">Hidalgo</option>

                  <option value="14">Jalisco</option>

                  <option value="15">México</option>

                  <option value="16">Michoacán</option>

                  <option value="17">Morelos</option>

                  <option value="18">Nayarit</option>

                  <option value="19">Nuevo León</option>

                  <option value="20">Oaxaca</option>

                  <option value="21">Puebla</option>

                  <option value="22">Querétaro</option>

                  <option value="23">Quintana Roo</option>

                  <option value="24">San Luis Potosí</option>

                  <option value="25">Sinaloa</option>

                  <option value="26">Sonora</option>

                  <option value="27">Tabasco</option>

                  <option value="28">Tamaulipas</option>

                  <option value="29">Tlaxcala</option>

                  <option value="30">Veracruz</option>

                  <option value="31">Yucatán</option>

                  <option value="32">Zacatecas</option>

            </select>

          </label>

           </div>

          <div className="btnholder">

            <button className="btn" type="submit">

                Enviar

           </button>

          </div>
        </form>
      </div>
    );
  }
}

export default App;
