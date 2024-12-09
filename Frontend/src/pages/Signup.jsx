import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import fries from '../assets/fries.png';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import axios from 'axios';
const Signup = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmpassword,setConfirmpassword]=useState("");
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log('Form submitted',name,email,password,confirmpassword);
   try {
    await axios.post("http://localhost:5000/api/v1/user/register",{
      name,
      email,
      password,
      confirmpassword,
      role:"User"
    },
  {
    withcredentials:true,
    headers:{
       "Content-Type":"application/json"
    }
  }).then((res)=>{
    console.log(res.data.message);
    toast.success(res.data.message);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  })
   } catch (error) {
    toast.error(error.response.data.message);
   }
  };

  return (
    <>
      <Container fluid style={{ width: "100%", height: "100%" }}>
        <Row className='mt-5'>
          <h3 className='mt-5 text-center text-muted'>Welcome!</h3>
          <p className='text-center'>Start your journey with us by signing up. It only takes a few minutes!</p>
          <Col xs={12} md={6} lg={6}>
            <img src={fries} className='rounded' alt='juice' width={"100%"} height={"90%"} />
          </Col>

          <Col xs={12} md={6} lg={5} className='mt-5'>
            <Form className='shadow-lg p-5 bg-white rounded' style={{ height: '550px' }} onSubmit={handleSubmit}>
              <p className='text-center' style={{ color: "orange", fontSize: "25px", fontWeight: "bold" }}>SIGNUP</p>
              <Form.Group className='mb-3 p-2' controlId='name'>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2 " controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className='mb-3 p-2' controlId='confirmpassword'>
                <Form.Control
                  type='password'
                  placeholder='Confrim Password'
                  value={confirmpassword}
                  onChange={(e)=>setConfirmpassword(e.target.value)}
                  style={{ padding: "10px" }} />
              </Form.Group>

              <div className='d-flex justify-content-center'>
                <Button variant='primary' className='w-25' type='submit'>Sign Up</Button>
              </div>
              <p className='text-center mt-3 p-4'>If you have already an account? <a href='/login' style={{ textDecoration: "none" }}>Login</a></p>
            </Form>
          </Col>
        </Row>
        <hr style={{ border: "2px dashed orange", margin: "0", padding: "0", marginTop: "10px" }} />
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default Signup
