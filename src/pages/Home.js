import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Home.css';

import { Link } from 'react-router-dom';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=44550883b586091b9c3690d043df4c98&page=1&language=US")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            results: data.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, results } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-intro">
              Welcome to the App React Movies!
            </p>
            <Link className="App-link" to="/about"> About </Link>
            <div>
              <h2>Movies</h2>
              <div className="flex-container">
                {results.map(movie => (
                  <div className="card">
                    <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt={movie.title} />
                      {movie.title}
                      <p>Rate: {movie.vote_average}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>
        </div>
      );
    }
  }
}