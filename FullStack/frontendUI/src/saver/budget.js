import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function Budget() {
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
    localStorage.removeItem(localStorage.getItem("email") +"active1");
    window.location.reload(false);
  };

  const create = () => {
    localStorage.setItem(localStorage.getItem("email") +"active1", 1);
    localStorage.setItem(localStorage.getItem("email") +"edit1", 1);
  };

  const edit = () => {
    localStorage.removeItem(localStorage.getItem("email") +"edit1");
    window.location.reload(false);
  }

  if (localStorage.getItem(localStorage.getItem("email") +"active1") === null)
  {
  return (
    <>
  <>
  <Form>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Budget Name</Form.Label>
      <FormControl type="text" placeholder="Enter name for new budget" 
      ref={textInput} onChange={() => localStorage.setItem(localStorage.getItem("email") +"name1", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder="Tuition Cost" 
      ref={textInput2} onChange={() => localStorage.setItem(localStorage.getItem("email") +"cost1", textInput2.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder="Monthly Rent" 
      ref={textInput3} onChange={() => localStorage.setItem(localStorage.getItem("email") +"rent1", textInput3.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder="Textbooks Cost" 
      ref={textInput4} onChange={() => localStorage.setItem(localStorage.getItem("email") +"book1", textInput4.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder="Weekly Wage" 
      ref={textInput5} onChange={() => localStorage.setItem(localStorage.getItem("email") +"wage1", textInput5.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder="Scholarship Awards" 
      ref={textInput6} onChange={() => localStorage.setItem(localStorage.getItem("email") +"scholar1", textInput6.current.value)}/>
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
  if (localStorage.getItem(localStorage.getItem("email") +"edit1") === null)
  {
  return (
    <>
  <>
  <Form>
      <Form.Text id="passwordHelpBlock" muted>
        Your orignal budget information is shown as the default.
      </Form.Text>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Budget Name</Form.Label>
      <FormControl type="text" placeholder={localStorage.getItem(localStorage.getItem("email") +"name1")}
      ref={textInput} onChange={() => localStorage.setItem(localStorage.getItem("email") +"name1", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem(localStorage.getItem("email") +"cost1")}
      ref={textInput2} onChange={() => localStorage.setItem(localStorage.getItem("email") +"cost1", textInput2.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem(localStorage.getItem("email") +"rent1")}
      ref={textInput3} onChange={() => localStorage.setItem(localStorage.getItem("email") +"rent1", textInput3.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem(localStorage.getItem("email") +"book1")}
      ref={textInput4} onChange={() => localStorage.setItem(localStorage.getItem("email") +"book1", textInput4.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem(localStorage.getItem("email") +"wage1")}
      ref={textInput5} onChange={() => localStorage.setItem(localStorage.getItem("email") +"wage1", textInput5.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem(localStorage.getItem("email") +"scholar1")}
      ref={textInput6} onChange={() => localStorage.setItem(localStorage.getItem("email") +"scholar1", textInput6.current.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit"
    onClick={() => create()}
    >
      Update
    </Button>
  </Form>
  </>
    </>
  );
  }
  var money = (Number(localStorage.getItem(localStorage.getItem("email") +"cost1"))/-6) - Number(localStorage.getItem(localStorage.getItem("email") +"rent1")) - (Number(localStorage.getItem(localStorage.getItem("email") +"book1"))/6) + (Number(localStorage.getItem(localStorage.getItem("email") +"wage1"))*4) + (Number(localStorage.getItem(localStorage.getItem("email") +"scholar1"))/6);
  var alert;
  if (money > 0) {
    alert = <Alert key='success' variant='success'>
    You have a monthly gain of +${money.toFixed(2)}!
  </Alert>;
  } else {
    alert = <Alert key='danger' variant='danger'>
    You have a monthly loss of -${money.toFixed(2)}.
  </Alert>;
  }
  return (
    <>
    {alert}
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{localStorage.getItem(localStorage.getItem("email") +"name1")}</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-${localStorage.getItem(localStorage.getItem("email") +"cost1")}</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-${localStorage.getItem(localStorage.getItem("email") +"rent1")}</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-${localStorage.getItem(localStorage.getItem("email") +"book1")}</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+${localStorage.getItem(localStorage.getItem("email") +"wage1")}</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+${localStorage.getItem(localStorage.getItem("email") +"scholar1")}</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={() => deletion()}>Delete</Button>{' '}
    <Button onClick={() => edit()}>Edit</Button>{' '}
    </>
  );
}

export default Budget;