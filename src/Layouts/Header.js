import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Images/logo.png';




const Header = () => {

  // console.log(logo);
  return (
 
      <Navbar className='header' collapseOnSelect expand="lg" >
        <Container fluid className='header'>
          <Navbar.Brand href="#home">

            <img width={"150px"} src={logo} alt="Logo" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu m-auto">
              <Nav.Link href="/platform">Platform</Nav.Link>

              <NavDropdown title="Services" id="collasible-nav-dropdown">
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
              <Nav.Link href="/plans">Plans</Nav.Link>
              <Nav.Link href="/ourWork">Our Work</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
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
            <Nav className="side-buttons">
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
  );
}

export default Header
