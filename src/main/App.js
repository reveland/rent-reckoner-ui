import React, { Component } from 'react';
import './App.css';
import TimeBoard from './components/TimeBoard.js';

class App extends Component {
  render() {
    let tables = this.props.tables;
    return (
      <TimeBoard
        tables={tables} />
    )
  }
}

export default App;
