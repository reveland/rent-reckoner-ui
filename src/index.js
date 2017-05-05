import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';

var url = 'http://localhost:5000/bills'
fetch(url, {
  method: "GET"
}).then(response => {
  response.json()
    .then(json => {
      ReactDOM.render(
        <App data={json} />,
        document.getElementById('root')
      );
    })
})

