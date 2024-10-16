import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Topbar = () => {
  return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" style={{fontSize:"25px",fontWeight:"bold",padding:"10px",color:"orange"}}>Foody Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh',maxWidth:"100vw",textAlign:"center"}}
            navbarScroll
          >
            <Nav.Link href="/" className='p-2 home'>Home</Nav.Link>
            <Nav.Link href='/About' className='p-2 about'>About</Nav.Link>
            <Nav.Link href='/service' className='p-2 service'>Services</Nav.Link>
            <Nav.Link href='/contact' className='p-2 contact'>Contact</Nav.Link>
            <Nav.Link href='/policy' className='p-2 terms'>Terms & Policy</Nav.Link>
          </Nav>
           <Nav.Link href='/login' className='p-2 login' style={{}}>Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Topbar
