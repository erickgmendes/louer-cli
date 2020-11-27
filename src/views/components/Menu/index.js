import React from "react"

import { Link } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: 'Home'
    }
  }

  componentDidMount() {

  }

  onChangeTitulo = event =>{
    console.log(event.target.text)
  }

  render() {
    return (
      <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse"
                data-target="#navbar-collapse-uarr">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="./index.html" title="">
                <img src="./assets/images/mashuptemplate.svg" className="navbar-logo-img" alt="" />
              </a>
              <div className="navbar-header">
                <h3>{this.state.titulo}</h3>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-uarr">
              <ul className="nav navbar-nav navbar-right">
                <li><Link onClick={e => this.setState({ titulo: e.target.text })} to="/">Home</Link></li>
                <li><Link onClick={e => this.setState({ titulo: e.target.text })} to="/clientes">Clientes</Link></li>
                <li><a href="./pricing.html" title=""> Pricing </a></li>
                <li><a href="./contact.html" title="">Contact</a></li>
                <li><a href="./components.html" title="">Components</a></li>
                <li>
                  <p>
                    <a href="./download.html" className="btn btn-primary navbar-btn" title="">Download</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Menu