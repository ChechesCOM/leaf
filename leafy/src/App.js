import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'
import {push} from 'react-router-redux'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    push('/gracias')
    alert('Hemos recibido sus datos y nos pondremos en contacto.');
    event.preventDefault();
  }

  getInitialState() {
    return {
      pais: [],
      lista: []
    }
  }

  componentDidMount() {

    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {

        this.setState({ pais: res.data })

        this.setState({ lista: this.state.pais.map((pais) => <option>{pais.name}</option>) });

      })

  }


  render() {

    return (
      <div className="App">

        <div className="greenleaf"  >

          <h1>Greenleaf</h1>
          <i className="fa fa-leaf hoja fa-5x"></i>

        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name:
    <input type="text" name="name" required />
          </label>

          <label>
            E-mail:
              <input type="email" name="e-mail" required />
          </label>

          <label>
            Telefono:
              <input type="tel" name="telefono" required />
          </label>

          <label>
            Fecha:
              <input type="date" name="fecha" required />

          </label>
          <div className="ciudad">
            <label>
              <select>

                {this.state.lista}

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
