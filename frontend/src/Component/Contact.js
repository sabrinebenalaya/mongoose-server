import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Add from "../Page/Add";
function Contact({ key, contact }) {
  const deleteContact = async (id) => {
    try{
    await axios.delete(`http://localhost:3002/deleteUser/${id}`);
  } catch (error) {
    console.log(error);
  }
  };

  const handelClickDelete = (id) => {
    deleteContact(id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr>
        <td>{key}</td>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.age}</td>
        <td>
          <p>
            <Button variant="primary" type="submit" onClick={handleShow}>
              Edit
            </Button>
          </p>
          <p>
            <Button
              variant="primary"
              type="submit"
              onClick={() => handelClickDelete(contact._id)}
            >
              delete
            </Button>
          </p>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Add
            stateContact={"edit"}
            contact={contact}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contact;
