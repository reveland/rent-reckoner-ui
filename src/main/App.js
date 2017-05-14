import React, { Component } from 'react';
import './App.css';
import TimeBoard from './components/TimeBoard.js';

class App extends Component {
  render() {
    let tables = this.props.tables;
    let start = tables[0]["start"]
    let end = tables[1]["end"]
    return (
      <TimeBoard
        tables={tables}
        start={start}
        end={end} />
    )
  }
}

export default App;
