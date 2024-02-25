import React from "react";
import Table from 'react-bootstrap/Table';


/* export default function Table({users, updateUser, deleteUser, handleUpdatedStatus}) {
  return (
    
    <table className="container">
      <caption className="tableHeader">Lost Pets</caption> 
      <thead>
        <tr key={"listed-items"}>
          <th>Pet's Name</th>
          <th>Pet Type</th>
          <th>Pet Age</th>
          <th>Description of Pet</th>
          <th>Status of Pet</th>
          <th>Delete Pet from Board</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.animalType}</td>
            <td>{user.age}</td>
            <td>{user.description}</td>
            <td>{user.status}</td>
            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
            <td>
              <input onChange={(e) => handleUpdatedStatus(e.target.value)} placeholder="Enter updated pet status"></input>
              <button onClick={(e) => updateUser(user.status)}>Update Status</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
} */



function PetBoard ({users, updateUser, deleteUser, handleUpdatedStatus}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr key={"list-items"}>
          <th>Pet's Name</th>
          <th>Pet Type</th>
          <th>Pet Age</th>
          <th>Description of Pet</th>
          <th>Status of Pet</th>
          <th>Delete Pet from Board</th>
          <th>Update Status</th>
        </tr>
      </thead>
      <tbody>
       {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.animalType}</td>
            <td>{user.age}</td>
            <td>{user.description}</td>
            <td>{user.status}</td>
            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
            <td>
              <input onChange={(e) => handleUpdatedStatus(e.target.value)} placeholder="Enter updated pet status"></input>
              <button onClick={(e) => updateUser(user)}>Update Status</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PetBoard;
