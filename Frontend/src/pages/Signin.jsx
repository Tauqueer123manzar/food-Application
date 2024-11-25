import React from 'react';
import { Container,Row,Col,Button,Form} from 'react-bootstrap';
import Footer from '../components/Footer';
import juice from '../assets/fast food.png';
const Signin = () => {
  return (
   <>
    <Container fluid style={{width:"100%",height:"100%"}}>
        <Row className='mt-5'>
            <h3 className='mt-5 text-center text-muted'>Welcome Back!</h3>
            <p className='text-center'>Log in to continue managing your account and stay updated with our services.</p>
            <Col xs={12} md={6} lg={6}>
                  <img src={juice} className='rounded' alt='juice' width={"90%"} height={"90%"} />
            </Col>
            <Col xs={12} md={6} lg={5} className='mt-5'>
                <Form className='shadow-lg p-5 bg-white rounded' style={{height:"100%"}}>
                <p className='text-center' style={{color:"orange",fontSize:"25px",fontWeight:"bold"}}>LOGIN</p>
                    <Form.Group className="mb-3 p-2" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        style={{padding:"10px"}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 p-2 " controlId="password">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        style={{padding:"10px"}}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button variant='primary' className='w-25'>Login</Button>
                    </div>
                    <p className='text-center mt-3 p-4'>If you have no account? <a href='/signup' style={{textDecoration:"none"}}>Signup</a></p>
                </Form>
            </Col>
        </Row>
        <hr style={{border:"2px dashed orange", margin:"20px",padding:"0"}}/>
        <Row className='mt-2'>
            <Footer/>
        </Row>
    </Container>
   </>
  )
}

export default Signin
