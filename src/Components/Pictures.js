import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//a place to put pictures of lost pets, names, and a small description 

//buttons link to the home page 

export default function Pictures() {
  return (
    <>
    <h1 className="text-center mb-5">Pictures of Lost Pets</h1>
    <Container>
      <Row>
        <Col>
    <Card style={{
      padding: '10px',
      margin: '10px',
      width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" />
      <Card.Body>
        <Card.Title>Charlie</Card.Title>
        <Card.Text>
          Charlie is a small dog, ran off during fireworks.  UPDATE: Found!
        </Card.Text>
        <Link to='/Home'><Button variant="primary">Go to our Lost Pet Board</Button></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ 
      padding: '10px',
      margin: '10px',
      width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spectator.co.uk/wp-content/uploads/2023/05/6Cat-Alamy.jpg?w=1000" />
      <Card.Body>
        <Card.Title>Max</Card.Title>
        <Card.Text>
          Max is an outdoor cat who hasn't been home in a few days.  UPDATE: Found!
        </Card.Text>
        <Link to='/Home'><Button variant="primary">Go to our Lost Pet Board</Button></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ 
      padding: '10px',
      margin: '10px',
      width: '18rem' }}>
      <Card.Img variant="top" src="https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1692605499.6093512/orange-cat.jpg" />
      <Card.Body>
        <Card.Title>Carl</Card.Title>
        <Card.Text>
          Carl ran out when the door was open, he is missed by his family.  UPDATE: Found!
        </Card.Text>
        <Link to='/Home'><Button variant="primary">Go to our Lost Pet Board</Button></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ 
      padding: '10px',
      margin: '10px',
      width: '18rem' }}>
      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod/images/worlds-smallest-dogs-1647336453.jpg?crop=0.493xw:0.987xh;0.505xw,0.00326xh&resize=640:*" />
      <Card.Body>
        <Card.Title>Buddy</Card.Title>
        <Card.Text>
          Buddy slipped out a small hole in our gate.  UPDATE: Found!
        </Card.Text>
        <Link to='/Home'><Button variant="primary">Go to our Lost Pet Board</Button></Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  );
}



