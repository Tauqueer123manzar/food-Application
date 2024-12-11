import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const Topbar = () => {

  const token=localStorage.getItem('token');
  const navigate=useNavigate();
  const handlelogout=()=>{
   try {
    toast.success("Logout Successfully");
    localStorage.clear();
    navigate("/login");
   } catch (error) {
     console.log("Logout error",error);
     toast.error("Something went wrong");
   }
  }

  return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" style={{fontSize:"25px",fontWeight:"bold",padding:"10px",color:"orange"}}>Foody Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh',maxWidth:"100vw",textAlign:"center"}}
            navbarScroll
          >
            <Nav.Link href="/" className='p-2 home text-dark'>Home</Nav.Link>
            <Nav.Link href='/About' className='p-2 about text-dark'>About</Nav.Link>
            <Nav.Link href='/service' className='p-2 service text-dark'>Services</Nav.Link>
            <Nav.Link href='/contact' className='p-2 contact text-dark'>Contact</Nav.Link>
          </Nav>
          {
           token?
           <Nav.Link className='p-2 text-muted fs-5' style={{textAlign:"center"}} onClick={handlelogout}>Logout</Nav.Link>
           :<Nav.Link href='/login' className='p-2 text-muted fs-5' style={{textAlign:"center"}}>Login</Nav.Link>
          }
           <Nav.Link href='/cart' className='p-2 text-muted fs-5' style={{textAlign:"center"}}>Cart</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Topbar
