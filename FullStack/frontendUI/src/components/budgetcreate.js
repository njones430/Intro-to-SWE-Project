import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';

function Input() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        New Budget
      </Button>
      <Collapse in={open}>
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

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
        </div>
      </Collapse>
    </>
  );
}

export default Input;