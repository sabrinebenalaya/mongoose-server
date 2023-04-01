import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
function Add({stateContact,  contact, handleClose}) {
  const navigate = useNavigate();
  const [newContact, SetNewContact] = useState({});
  const handelChange = (e) => {
    SetNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/addUser", newContact);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

  };
  
  const handelSave = async (e) => {
    e.preventDefault();
    try {
     await axios.put(
        `http://localhost:3002/updateUser/${contact._id}`,
        newContact
      );
      handleClose()
      
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          onChange={handelChange}
          placeholder = {stateContact === "edit" ? contact.lastName :"Enter your Last Name"}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          placeholder = {stateContact === "edit" ? contact.firstName :"Enter your First Name"}
          onChange={handelChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder = {stateContact === "edit" ? contact.email :"Enter email"}
          onChange={handelChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder = {stateContact === "edit" ? contact.age :"Enter your Age"}
          onChange={handelChange}
          name="age"
        />
      </Form.Group>
      {stateContact === "add" ? (
        <Button variant="primary" type="submit" onClick={handelClick}>
          Add
        </Button>
      ):<Button variant="primary" onClick={handelSave}>
      Save Changes
    </Button>}
    </Form>
  );
}

export default Add;
