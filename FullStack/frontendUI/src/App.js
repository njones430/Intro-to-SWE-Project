import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Input from './components/budgetcreate';
import ReactDOM from 'react-dom';
import Nav from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Budget from './saver/budget';
import Budget2 from './saver/budget2';
import Budget3 from './saver/budget3';
import Profile from './saver/profile';

import './App.css';

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Student Saver</h1>
      <a href="http://localhost:3007" rel="noopener noreferrer" class="google btn" className="google-btn">
      <Button variant="primary" style={{float: 'right'}}>Log Out</Button>
      </a>
    </Container>
    <Router>
    <Nav></Nav>
    <Routes>
        <Route path='/budget' element={<Budget/>} />
        <Route path='/budget2' element={<Budget2/>} />
        <Route path='/budget3' element={<Budget3/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
    </Router>
  </Container>
);

export default App;
