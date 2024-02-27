import React, { useState } from "react";

export default function Form({ postUser }) {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petStatus, setPetStatus] = useState("");
  
  //function to add a new user on the form

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
  
  //function does not work to clear form
 const resetUser = (e) => {
  e.preventDefault()
  console.log('Clearing input fields')
 }

 //works to reset the form but resets entire website also...not sure why
  const resetForm = () => {
      petName(""),
      petType(""),
      petAge(""),
      petDescription(""),
      petStatus("")
  }
  
//form to allow for updating the form/api
  return <form className="myForm">
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
    <button onClick={(e) => addUser(e)}>Submit</button>
    <button onClick={() => resetForm}>Reset Form</button>
  </form>
}



 