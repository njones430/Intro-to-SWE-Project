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

var name = "";
var tuition = 0;
var rent = 0;
var books = 0;
var wage = 0;
var scholar = 0;

function Input() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [active, setActive] = useState(false);
  var textInput = React.createRef(); 
  var textInput2 = React.createRef(); 
  var textInput3 = React.createRef(); 
  var textInput4 = React.createRef(); 
  var textInput5 = React.createRef(); 
  var textInput6 = React.createRef(); 

  if (!active)
  {
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Budgets
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        You do not have any active budgets! You must create a new one!
        </div>
      </Collapse>
  <>
    <Button
      onClick={() => setOpen2(!open2)}
      aria-controls="example-collapse-text"
      aria-expanded={open2}
    >
      New Budget
    </Button>
    <Collapse in={open2}>
      <div id="example-collapse-text">
      <Form>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Budget Name</Form.Label>
      <FormControl type="text" placeholder="Enter name for new budget" 
      ref={textInput} onChange={() => name = textInput.current.value}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder="Tuition Cost" 
      ref={textInput2} onChange={() => tuition = textInput2.current.value}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder="Monthly Rent" 
      ref={textInput3} onChange={() => rent = textInput3.current.value}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder="Textbooks Cost" 
      ref={textInput4} onChange={() => books = textInput4.current.value}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder="Weekly Wage" 
      ref={textInput5} onChange={() => wage = textInput5.current.value}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder="Scholarship Awards" 
      ref={textInput6} onChange={() => scholar = textInput6.current.value}/>
    </Form.Group>

    <Button variant="primary" type="submit"
    onClick={() => setActive(!active)}
    >
      Create
    </Button>
  </Form>
      </div>
    </Collapse>
  </>
    </>
  );
  }
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Budgets
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{name}</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-${tuition}</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-${rent}</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-${books}</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+${wage}</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+${scholar}</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </Collapse>
    </>
  );
}

export default Input;