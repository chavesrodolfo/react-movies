import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './About.css';

import { Link } from 'react-router-dom';


export default class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
              About this app.
          </p>
          <Link className="App-link" to="/"> Home </Link>
        </header>
      </div>
        
    );
  }
}