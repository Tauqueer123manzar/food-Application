import React from 'react'
import { Container,Row,Col,Button,Form} from 'react-bootstrap';
import fries from '../assets/fries.png';
import Footer from '../components/Footer';
const Signup = () => {
  return (
   <>
    <Container fluid>
    <Row className='mt-5'>
            <h3 className='mt-5 text-center text-muted'>Welcome!</h3>
            <p className='text-center'>Start your journey with us by signing up. It only takes a few minutes!</p>
            <Col xs={12} md={6} lg={6}>
                  <img src={fries} className='rounded' alt='juice' width={"100%"} height={"90%"} />
            </Col>
            <Col xs={12} md={6} lg={5} className='mt-5'>
                <Form className='shadow-lg p-5 bg-white rounded' style={{height:'550px'}}>
                <p className='text-center' style={{color:"orange",fontSize:"25px",fontWeight:"bold"}}>SIGNUP</p>
                <Form.Group className='mb-3 p-2' controlId='name'>
                   <Form.Control
                   type='text'
                   placeholder='Name'
                    style={{padding:"10px"}}
                   />      
                </Form.Group>
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
                    <Form.Group className='mb-3 p-2' controlId='confirmpassword'>
                      <Form.Control
                      type='password'
                      placeholder='Confrim Password'
                      style={{padding:"10px"}}/>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button variant='primary' className='w-25'>Login</Button>
                    </div>
                    <p className='text-center mt-3 p-4'>If you have already an account? <a href='/login' style={{textDecoration:"none"}}>Login</a></p>
                </Form>
            </Col>
        </Row>
        <hr style={{border:"2px dashed orange", margin:"20px",padding:"0"}}/>
        <Row>
            <Footer/>
        </Row>
    </Container>
   </>
  )
}

export default Signup
