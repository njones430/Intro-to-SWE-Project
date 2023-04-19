import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import name from './load.txt';

fetch(name)
 .then(r => r.text())
 .then(text => {
    localStorage.setItem("email", text);
});

ReactDOM.render(<App />, document.getElementById('root'));
