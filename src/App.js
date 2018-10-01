import React, { Component } from 'react';
import Countdown from './components/Countdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countdown to New Years 2019!</h1>
        <br />
        <Countdown to={new Date("January 1, 2019")} />
      </div>
    );
  }
}

export default App;
