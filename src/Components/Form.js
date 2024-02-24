import React, { useState } from "react";

export default function Form({ postUser }) {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petStatus, setPetStatus] = useState("");
  
  

  const addUser = (e) => {
    e.preventDefault()
    let newUser = {
      name: petName,
      animalType: petType,
      age: petAge,
      description: petDescription,
      status: petStatus
    }
    console.log(`New user is: ` ,newUser)
    postUser(newUser)
  } 
  
 const resetUser = (e) => {
  e.preventDefault()
  let emptyUser = {
    name: '',
    animalType: '',
    age: '',
    description: '',
    status: ''
  }
  console.log('Clearing input fields')
  resetUser(emptyUser)
 }

  /* function handleClick(e) {
    useState({
      petName: '',
      petType: '',
      petAge: '',
      petDescription: '',
      petStatus: ''
    })
  } */
  

  return <form onSubmit={(e) => addUser(e)} className="myForm">
    <h3>Post Lost Pet</h3>
    <label>Pet's Name</label>
    <input
      onChange={(e) => setPetName(e.target.value)} />
    <label>Pet Type</label>
    <input onChange={(e) => setPetType(e.target.value)} />
    <label>Pet's Age</label>
    <input onChange={(e) => setPetAge(e.target.value)} />
    <label>Description of Pet</label>
    <input onChange={(e) => setPetDescription(e.target.value)}/>
    <label>Status of Pet</label>
    <input onChange={(e) => setPetStatus(e.target.value)}/>
    <button onClick={() => resetUser}>Submit</button>
  </form>
}



 