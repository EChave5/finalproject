
import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormFloatingTextareaExample() {
  
  const [setName] = useState('')
  const [setComment] = useState('')

  //would be the function used with the submit button but did not have time work on this function
  
  const handleClick = (e) => {

  }

  //used react-bootstrap form with this contact page  -- would need to figure out how to clear the input fields after submit 

  //submit button does not work, did not get to that point in my project.  I would also like to style the button differently, align it more in the center than to the side

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