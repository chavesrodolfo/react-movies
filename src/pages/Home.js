import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Home.css';

import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
              Welcome to the App React Movies!
          </p>
          <Link className="App-link" to="/about"> About </Link>
        </header>
      </div>
        
    );
  }
}