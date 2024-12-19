import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Footer from '../components/Footer';
import juice from '../assets/fast food.png';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', email, password);
    try {
      const res = await axios.post(
         `${import.meta.env.VITE_BASE_URL}/api/v1/user/login`,
        { email, password, role: 'User' },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res.data.message);
      toast.success(res.data.message);
      setEmail('');
      setPassword('');
      navigate('/');
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('role',res.data.role);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <>
      <Container fluid style={{ width: '100%', height:"100%",backgroundColor:"wheat"}}>
        <Row className="mt-5">
          <h3 className="mt-5 text-center text-muted">Welcome Back!</h3>
          <p
            className="text-center"
            style={{
              fontWeight: '400',
              fontFamily: 'initial',
              fontSize: '25px',
              color: 'orange',
            }}
          >
            <Typewriter
              words={[
                'Log in to continue managing your account and stay updated with our services!',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={3000}
            />
          </p>

          <Col xs={12} md={6} lg={6} className="text-center">
            <img
              src={juice}
              className="rounded"
              alt="juice"
              style={{ maxWidth: '90%', height: 'auto' }}
            />
          </Col>

          <Col xs={12} md={6} lg={5} className="mt-5">
            <Form
              className="shadow-lg p-5 rounded"
              style={{ width:"100%",height:"90%",backgroundColor:"lightyellow"}}
              onSubmit={handleSubmit}
            >
              <p
                className="text-center"
                style={{
                  color: 'orange',
                  fontSize: '25px',
                  fontWeight: '500',
                }}
              >
                USER LOGIN
              </p>
              <Form.Group className="mb-3 p-2" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: '10px' }}
                />
              </Form.Group>
              <Form.Group className="mb-3 p-2" controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: '10px' }}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="w-25">
                  Login
                </Button>
              </div>
              <p className="text-center mt-3 p-4">
                If you have no account?{' '}
                <a href="/signup" style={{ textDecoration: 'none' }}>
                  Signup
                </a>
              </p>
            </Form>
          </Col>
        </Row>
        <hr
          style={{
            border: '2px dashed orange',
            margin: '20px',
            padding: '0',
          }}
        />
      </Container>
      <Container fluid style={{width:"100%",height:"100%"}}>
      <Row className="mt-2">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Signin;
