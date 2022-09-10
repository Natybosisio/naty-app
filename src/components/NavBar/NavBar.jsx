//CREAR BARRA DE MENU SIMPLE
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import M01 from '../Images/M-01.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget';
import { Link} from "react-router-dom"

function navBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="containerNav">

        <Navbar.Brand>
          <Link to="/">
          <img src={M01} className="logo" alt="logo-MacaJoyas" />
          </Link>
        </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/">Inicio</Nav.Link>
            
            <NavDropdown title="Ingresar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/InicioSesion">Inicia Sesión</NavDropdown.Item>
              <NavDropdown.Item href="/Registrate">Registrate</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
              
          </Nav>
          
        </Navbar.Collapse>
        <CartWidget  />
        
      </Container>
    </Navbar>
  );
}

export default navBar;

