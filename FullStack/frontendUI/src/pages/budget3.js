import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function Budget3() {
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
    localStorage.removeItem("active3");
    window.location.reload(false);
  };

  const create = () => {
    localStorage.setItem("active3", 1);
    localStorage.setItem("edit3", 1);
  };

  const edit = () => {
    localStorage.removeItem("edit3");
    window.location.reload(false);
  }

  if (localStorage.getItem("active3") === null)
  {
  return (
    <>
  <>
  <Form>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Budget Name</Form.Label>
      <FormControl type="text" placeholder="Enter name for new budget" 
      ref={textInput} onChange={() => localStorage.setItem("name3", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder="Tuition Cost" 
      ref={textInput2} onChange={() => localStorage.setItem("cost3", textInput2.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder="Monthly Rent" 
      ref={textInput3} onChange={() => localStorage.setItem("rent3", textInput3.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder="Textbooks Cost" 
      ref={textInput4} onChange={() => localStorage.setItem("book3", textInput4.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder="Weekly Wage" 
      ref={textInput5} onChange={() => localStorage.setItem("wage3", textInput5.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder="Scholarship Awards" 
      ref={textInput6} onChange={() => localStorage.setItem("scholar3", textInput6.current.value)}/>
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
  if (localStorage.getItem("edit3") === null)
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
      <FormControl type="text" placeholder={localStorage.getItem("name3")}
      ref={textInput} onChange={() => localStorage.setItem("name3", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem("cost3")}
      ref={textInput2} onChange={() => localStorage.setItem("cost3", textInput2.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="rent">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem("rent3")}
      ref={textInput3} onChange={() => localStorage.setItem("rent3", textInput3.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="books">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem("book3")}
      ref={textInput4} onChange={() => localStorage.setItem("book3", textInput4.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="wage">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem("wage3")}
      ref={textInput5} onChange={() => localStorage.setItem("wage3", textInput5.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="scholarship">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder={localStorage.getItem("scholar3")}
      ref={textInput6} onChange={() => localStorage.setItem("scholar3", textInput6.current.value)}/>
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
  var money = (Number(localStorage.getItem("cost3"))/-6) - Number(localStorage.getItem("rent3")) - (Number(localStorage.getItem("book3"))/6) + (Number(localStorage.getItem("wage3"))*4) + (Number(localStorage.getItem("scholar3"))/6);
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
          <th>{localStorage.getItem("name3")}</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-${localStorage.getItem("cost3")}</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-${localStorage.getItem("rent3")}</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-${localStorage.getItem("book3")}</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+${localStorage.getItem("wage3")}</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+${localStorage.getItem("scholar3")}</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={() => deletion()}>Delete</Button>{' '}
    <Button onClick={() => edit()}>Edit</Button>{' '}
    </>
  );
}

export default Budget3;