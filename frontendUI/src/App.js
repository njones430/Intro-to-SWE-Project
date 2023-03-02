import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Input from './components/budgetcreate';
import ReactDOM from 'react-dom';
import Nav from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Budget1 from './pages/budget1';
import Budget2 from './pages/budget2';
import Budget3 from './pages/budget3';

import './App.css';

{/*const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};*/}

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome Back, User</h1>
      <Button variant="primary" style={{float: 'right'}}>Log Out</Button>
    </Container>
    <Router>
    <Nav></Nav>
    <Routes>
        <Route path='/budget1' element={<Budget1/>} />
        <Route path='/budget2' element={<Budget2/>} />
        <Route path='/budget3' element={<Budget3/>} />
    </Routes>
    </Router>
  </Container>
);

export default App;
