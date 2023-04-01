import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import Contact from "../Component/Contact";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const getAllUser = async () => {
    const users = await axios.get("http://localhost:3002/getUser");
    setContacts(users.data);
  };

  useEffect(() => {
    getAllUser();
  }, [contacts]);

  return (
    <div>
      {" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, key) => {
            return <Contact key={key} contact={contact} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList;
