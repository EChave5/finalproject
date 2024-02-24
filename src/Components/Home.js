import React, { useEffect } from 'react';
import Form from './Form';
import Table from './Table';
import App from '../App';
import { useState } from 'react';

export default function Home() {
  

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
    }])
  
    const [updatedStatus, setUpdatedStatus] = useState('')
  
    function handleUpdatedStatus (updatedStatusValue) {
      console.log(updatedStatusValue);
      setUpdatedStatus(updatedStatusValue);
    }
  
    
  
   
  
  
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
  
    //allows for creating a new user
    const postUser = (newUser) => {
      
      console.log('Post User: ', newUser);
  
      fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      }).then(() => getUsers())
      
      setUsers([...users, newUser])
    }
    
    //delete user
    const deleteUser = (id) => {
      console.log(id);
      console.log("deleting user");
      setUsers()
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      }).then(() => getUsers())
      setUsers(users.filter((user) => user.id !== user.id));
    }
  
    //update the status of a pet
    const updateUser = (user) => {
       
       let updatedUser = user
       user = updatedStatus

        console.log(updatedUser, updatedStatus);
      fetch(`${API_URL}/${user.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(updatedStatus)
      }).then(() => getUsers())
    }
	
		return (
    <div>
    <h2 className='text-center mb-5'>Lost Pet Board</h2>
    <div className='App'>
        
        <Form 
        postUser={postUser}
        />
        <br />
        <Table handleUpdatedStatus={handleUpdatedStatus} updateUser={updateUser} deleteUser={deleteUser} users={users}/>
      </div>
    </div>
    );
	
}