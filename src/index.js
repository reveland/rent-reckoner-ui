import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';
import data from './test/data/rere_test_data_v1.json'

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
