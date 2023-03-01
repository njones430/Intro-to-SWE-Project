import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import background from "./Money.png";
import GoogleButton from "react-google-button";
import { Link } from 'react-router-dom'
/*<GoogleButton onClick={() => { console.log('Google button clicked') }}/>*/

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    </div>
  );
}
export default App;