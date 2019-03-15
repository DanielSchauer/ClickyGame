import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
