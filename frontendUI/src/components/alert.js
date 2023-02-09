import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

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
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Budget Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name for new budget" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much is your tuition this year?</Form.Label>
      <Form.Control type="number" placeholder="Tuition Cost" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>What is your monthly rent?</Form.Label>
      <Form.Control type="number" placeholder="Monthly Rent" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much are your textbooks?</Form.Label>
      <Form.Control type="number" placeholder="Textbooks Cost" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>If you have a job, what is your weekly rate?</Form.Label>
      <Form.Control type="number" placeholder="Weekly Wage" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="tuition">
      <Form.Label>How much money did you earn in scholarships this year?</Form.Label>
      <Form.Control type="number" placeholder="Scholarship Awards" />
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
          <th>Budget 1</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-$10,000</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-$500</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-$200</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+$300</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+$2500</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </Collapse>
    </>
  );
}

export default Input;