import React, { Component } from 'react';

import ClienteService from '../../../service/ClienteService'

export default class Clientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: []
    }
  }

  componentDidMount() {
    // ClienteService.getAll().then(res => this.setState({ clientes: res.data }));

  }

  removerCliente = event => {
    let id = event.target.value
    console.log(id)

    //deleteCliente(id).then(res => this.setState({ clientes: res.data }));

    ClienteService.remove(id)
      .then(response => {
        console.log(response.data);
        this.history.push("/clientes");


      })
      .catch(e => {
        console.log(e);
      });


    //    .then(ClienteService.getAll().then(res => this.setState({ clientes: res.data })));



    //TutorialDataService.remove(currentTutorial.id)
  }

  render() {
    return (
      <div className="container">
        
      </div>
    )
  }
}