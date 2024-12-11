import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import fries from '../assets/fries.png';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmpassword,setConfirmpassword]=useState("");

  const navigate=useNavigate();
  
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
    method:"POST",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,password,confirmpassword
    })
  }).then((res)=>{
    console.log(res.data.message);
    toast.success(res.data.message);
    navigate("/login");
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
      <Container fluid style={{ width: "100%", height: "100%",backgroundColor:"wheat"}}>
        <Row className='mt-5'>
          <h3 className='mt-5 text-center text-muted'>Welcome!</h3>
          <p className='text-center' style={{ fontWeight: "400", fontFamily: "initial", fontSize: "25px", color: "orange" }}>
              <Typewriter
                words={["Start your journey with us by signing up. It only takes a few minutes!"]}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={100}
                deletedspeed={80}
                delayspeed={3000}
              />
            </p>
          <Col xs={12} md={6} lg={6}>
            <img src={fries} className='rounded' alt='juice' width={"90%"} height={"80%"} />
          </Col>

          <Col xs={12} md={6} lg={5} className='mt-5'>
            <Form className='shadow-lg p-5 rounded' style={{ height: '80%',backgroundColor:"lightyellow"}} onSubmit={handleSubmit}>
              <p className='text-center' style={{ color: "orange", fontSize: "25px", fontWeight: "500" }}>USER SIGNUP</p>

              <Form.Group className='mb-3 p-1' controlId='name'>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-1" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-1 " controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  style={{ padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className='mb-3 p-1' controlId='confirmpassword'>
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
      </Container>
      <Container fluid style={{ width: "100%", height: "100%"}}>
      <Row>
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default Signup
