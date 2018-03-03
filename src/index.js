import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';

let habitation_id = 1
let base = 'https://agile-stream-12274.herokuapp.com/'
let bills_url = base + habitation_id + '/bills_to_ui'
let resident_url = base + habitation_id + '/residents_to_ui'

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
