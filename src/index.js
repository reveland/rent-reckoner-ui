import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';

let habitation_id = 0

var url = 'http://localhost:5000/habitations/' + habitation_id + '/bills'
fetch(url, {
  method: "GET",
}).then(response => {
  response.json()
    .then(json => {
      ReactDOM.render(
        <App data={json} />,
        document.getElementById('root')
      );
    })
})
