import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  useRouteMatch
} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Table from './Components/Table';
import Form from './Components/Form';
import { useState } from 'react';
import Navigation from './Components/Navigation';


export default function App() {
/* 
  const API_URL = 'https://65b337a1770d43aba4796fe1.mockapi.io/week16/pets'

  const [users, setUsers] = useState([
    {
      name: '', 
      animalType: '',
      age: '', 
      description: '',
      status: '',
    },
  ])

  const [newUser, setNewUser] = useState([{
    name: '',
    animalType: '',
    age: '',
    description: '',
    status: '',
  }]) */

/*   const [updatedStatus, setUpdatedStatus] = useState('')

  function handleUpdatedStatus (updatedStatusValue) {
    console.log(updatedStatusValue);
    setUpdatedStatus(updatedStatusValue)
  }
 */
  

 

  /* function handlePetName (nameValue) {
    console.log(nameValue);
    setNewUser({
      ...newUser, 
      name: nameValue
    })

  console.log(newUser);
  }

  function handlePetType (animalTypeValue) {
    setNewUser({
      ...newUser, 
      animalType: animalTypeValue,
    })
  }

  function handlePetAge (ageValue) {
    setNewUser({
      ...newUser,
      age: ageValue,
    })
  }

  function handlePetDescription (descriptionValue) {
    setNewUser({
      ...newUser,
      description: descriptionValue,
    })
  
  }

  function handlePetStatus (statusValue) {
    setNewUser({
      ...newUser,
      status: statusValue,
    })
  } */
/* 
  useEffect(() => {
    fetch(API_URL)
    .then((data) => data.json())
    .then((data) => setUsers(data))
  }, []);

 

  //pulls data from api
  function getUsers() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }

  const postUser = (newUser) => {
    //prevents info/page from refreshing
    
    console.log('Post User: ', newUser);

    fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }).then(() => getUsers())
    
    setUsers([...users, newUser])
  }
  
  const deleteUser = (id) => {
    console.log(id);
    console.log("deleting user");
    setUsers()
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers())
    setUsers(users.filter((user) => user.id !== user.id));
  }

  const updateUser = (user) => {
      let updatedUser = user
      updateUser.status = updatedStatus
      console.log(updatedUser);
    fetch(`${API_URL}/${user.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(user)
    }).then(() => getUsers())
  } */

  return (
    <>
    <div>
      <Navigation />
    </div>
      
      </>
  );
}



