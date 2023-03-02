import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function Budget2() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [active, setActive] = useState(false);
  var textInput = React.createRef(); 
  var textInput2 = React.createRef(); 
  var textInput3 = React.createRef(); 
  var textInput4 = React.createRef(); 
  var textInput5 = React.createRef(); 
  var textInput6 = React.createRef(); 

  const deletion = () => {
    localStorage.removeItem("active2");
    window.location.reload(false);
  };

  const create = () => {
    localStorage.setItem("active2", 1);
  };

  if (localStorage.getItem("active2") === null)
  {
  return (
    <>
  <>
  <Form>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Budget Name</Form.Label>
      <FormControl type="text" placeholder="Enter name for new budget" 
      ref={textInput} onChange={() => localStorage.setItem("name2", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder="Tuition Cost" 
      ref={textInput2} onChange={() => localStorage.setItem("cost2", textInput2.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder="Monthly Rent" 
      ref={textInput3} onChange={() => localStorage.setItem("rent2", textInput3.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder="Textbooks Cost" 
      ref={textInput4} onChange={() => localStorage.setItem("book2", textInput4.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder="Weekly Wage" 
      ref={textInput5} onChange={() => localStorage.setItem("wage2", textInput5.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder="Scholarship Awards" 
      ref={textInput6} onChange={() => localStorage.setItem("scholar2", textInput6.current.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit"
    onClick={() => create()}
    >
      Create
    </Button>
  </Form>
  </>
    </>
  );
  }
  return (
    <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{localStorage.getItem("name2")}</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-${localStorage.getItem("cost2")}</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-${localStorage.getItem("rent2")}</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-${localStorage.getItem("book2")}</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+${localStorage.getItem("wage2")}</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+${localStorage.getItem("scholar2")}</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={() => deletion()}>Delete</Button>{' '}
    </>
  );
}

export default Budget2;