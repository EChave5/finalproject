import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Pictures from "./Pictures";
import { NavLink } from "react-bootstrap";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  useRouteMatch
} from 'react-router-dom'; 

export default function Navigation() {
  
return (
<Router>
<div>
<Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/pictures">Pictures</Nav.Link>
      </Nav.Item>
    </Nav>
    <br></br>
  {/* <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/pictures'>Pictures</Link>
      </li>
    </ul>
  </nav> */}
  <Switch>
  <Route path='/pictures'>
      <Pictures />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
</div>
</Router>
)}