import React from "react";
import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Phonebook</Link>
      </Navbar.Brand>
      <Navbar.Text>
        <Link to="/add-record">Add record</Link>
      </Navbar.Text>
    </Navbar.Header>
  </Navbar>
);

export default Header;
