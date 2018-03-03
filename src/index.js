import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';

let habitation_id = 1

var bills_url = 'http://127.0.0.1:5000/habitations/' + habitation_id + '/bills_to_ui'
var resident_url = 'http://127.0.0.1:5000/habitations/' + habitation_id + '/residents_to_ui'

let tables = []
fetch(bills_url, {
  method: "GET",
}).then(response => {
  response.json()
    .then(json => {
      tables.push(json)
      fetch(resident_url, {
        method: "GET",
      }).then(response => {
        response.json()
          .then(json => {
            tables.push(json)
            ReactDOM.render(
              <App tables={tables} />,
              document.getElementById('root')
            );
          })
      })
    })
})
