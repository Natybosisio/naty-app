//CREAR BARRA DE MENU SIMPLE
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import M01 from "./Images/M-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";


function navBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="containerNav">

        <Navbar.Brand href="./index.js">
          <img src={M01} className="logo" alt="logo-MacaJoyas" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./index.js">Inicio</Nav.Link>
            <Nav.Link href="./productos.js">productos</Nav.Link>
            <NavDropdown title="Ingresar" id="basic-nav-dropdown">
              <NavDropdown.Item href="./inicioSesion.js">Inicia Sesión</NavDropdown.Item>
              <NavDropdown.Item href="./registrate.js">Registrate</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
              
          </Nav>
          
        </Navbar.Collapse>
        <CartWidget />
        
      </Container>
    </Navbar>
  );
}

export default navBar;

