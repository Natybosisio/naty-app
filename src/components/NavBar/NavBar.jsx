//CREAR BARRA DE MENU SIMPLE
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import M01 from "../Images/M-01.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget";
import { NavLink, Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function navBar() {
	const [category, setCategory] = useState([]);
	const [id, setId]= useState('')
	
	useEffect(() => {
   
        const db = getFirestore();
        const items = collection(db, "productos");
        getDocs(items).then((snapshot) => {
          const docs = snapshot.docs.filter(doc =>({
            id: doc.id,
            category: doc.category
          }))
       
        setCategory(items.category)
  console.log(items.category)
        });
}, [id]);

	return (
		<Navbar bg='light' expand='lg'>
			<Container className='containerNav'>
				<Navbar.Brand>
					<Link to='/'>
						<img src={M01} className='logo' alt='logo-MacaJoyas' />
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Inicio</Nav.Link>

						<NavDropdown title='Ingresar' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/InicioSesion'>Inicia Sesión</NavDropdown.Item>
							<NavDropdown.Item href='/Registrate'>Registrate</NavDropdown.Item>
							<NavDropdown.Divider />
						</NavDropdown>
					</Nav>
					<div className='catalogoNav col-12'>
						<NavLink to={`category/Oro`}>
							<li className='tex-decor'>Oro</li>
						</NavLink>
						<Link to={`category/Plata`}>
							<li className=''>Plata</li>
						</Link>
						<Link to={`category/Piedras`}>
							<li className=''>Piedras</li>
						</Link>
					</div>
				</Navbar.Collapse>
				<Link to={`carrito`}>
				<CartWidget />
				</Link>
			</Container>
		</Navbar>
	);
}

export default navBar;
