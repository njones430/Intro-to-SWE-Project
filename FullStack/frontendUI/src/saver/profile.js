import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function Profile() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [active, setActive] = useState(false);
  var textInput = React.createRef(); 
  var textInput2 = React.createRef();

  const create = () => {
    localStorage.removeItem("prof1");
    window.location.reload(false);
  };

  const edit = () => {
    localStorage.setItem("prof1", 1);
    window.location.reload(false);
  }

  if (localStorage.getItem("prof1") === null)
  {
  return (
    <>
  <>
  <Form>
      <Form.Text id="passwordHelpBlock" muted>
        Enter your profile information. Your orignal profile information is shown as the default.
      </Form.Text>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Enter your full name:</Form.Label>
      <FormControl type="text" placeholder={localStorage.getItem(localStorage.getItem("email") + "name4")}
      ref={textInput} onChange={() => localStorage.setItem(localStorage.getItem("email") + "name4", textInput.current.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="college">
      <Form.Label>Enter your college/university:</Form.Label>
      <Form.Control type="text" placeholder={localStorage.getItem(localStorage.getItem("email") + "college")}
      ref={textInput2} onChange={() => localStorage.setItem(localStorage.getItem("email") + "college", textInput2.current.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit"
    onClick={() => edit()}
    >
      Save
    </Button>
  </Form>
  </>
    </>
  );
  }
  return (
    <>
    <h6>
        Full Name
    </h6>
    <h4>
    {localStorage.getItem(localStorage.getItem("email") + "name4")} 
    </h4>
    <h6>
        College
    </h6>
    <h4>
    {localStorage.getItem(localStorage.getItem("email") + "college")}
    </h4>
    <h6>
        E-Mail
    </h6>
    <h4>
    {localStorage.getItem("email")} 
    </h4>
    <Button onClick={() => create()}>Edit</Button>{' '}
    </>
  );
}

export default Profile;