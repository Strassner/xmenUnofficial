import React from 'react';
import {Card, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "./Header.css"

 
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {

  return (
    <Navbar xpand="lg" className="bg-color-header">
      <Container>
        <Navbar.Brand href="#home"><p className={"text-color"}>Commerce Bank</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/loan"><p className={"text-color"}>Loan</p></Nav.Link>
            <Nav.Link href="/customer"><p className={"text-color"}>Customer</p></Nav.Link>

            <NavDropdown title={<span className={"text-color"}>Dropdown</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;