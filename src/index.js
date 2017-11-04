import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';

let habitation_id = 0

var bills_url = 'http://limitless-stream-25117.herokuapp.com/habitations/' + habitation_id + '/bills'
var resident_url = 'http://limitless-stream-25117.herokuapp.com/habitations/' + habitation_id + '/residents'

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
