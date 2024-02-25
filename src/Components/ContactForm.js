
import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormFloatingTextareaExample() {
  
  const [setName] = useState('')
  const [setComment] = useState('')

  const handleClick = (e) => {

  }

  return (
    <>
    <div>
       <FloatingLabel
        controlId="floatingInput"
        label="Enter your name"
        className="container mb-3"
        
      >
        <Form.Control 
          type="text" 
          placeholder="Name" 
          />
      </FloatingLabel>
      <FloatingLabel 
      className="container"
      controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button 
      variant="outline-secondary" 
      size="lg"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        margin: '10px 20px',
      }}
      >Submit</Button>
    </div>
    </>
  );
}

export default FormFloatingTextareaExample;