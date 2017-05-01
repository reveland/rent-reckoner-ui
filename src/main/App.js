import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js';

class App extends Component {
  render() {
    let data = this.props.data;
    return (
      <Dashboard
        types={data.types}
        sumMaxAmount={data.sumMaxAmount}
        start={data.start}
        end={data.end} />
    )
  }
}

export default App;
