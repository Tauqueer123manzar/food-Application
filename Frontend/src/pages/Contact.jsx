import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import food from '../assets/food contact.jpg';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    helpType: "",
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch( "http://localhost:5000/api/v1/message/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setFormData({
          helpType: "", 
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <Container fluid style={{ width: "100%", height: "100%", overflowX: "hidden", margin: "0", padding: "0" }}>
        <Row>
          <Col xs={12} md={6} lg={12}>
            <div style={{
              backgroundImage: `url(${food})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "60vh",
              width: "100%",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.5",
                zIndex: "1"
              }}>
                <h1 className='text-center text-white'
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "times new roman", fontWeight: "bold" }}>
                  We would love to hear from you!</h1>
              </div>
            </div>
          </Col>
        </Row>
        {/* ================================================= Form Section ================================================ */}
        <Row className='mt-5'>
          <h1 className='text-center text-muted' style={{ fontFamily: "times new roman" }}>Contact With Us</h1>
          <Col xs={10} md={6} lg={6}>
            <Form className='p-2' onSubmit={handleSubmit}
             data-aos="flip-left"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-easing="ease-in-out"
             >
              <Form.Group className="mb-3" controlId="help">
                <Form.Select 
                  className='p-3 m-4' 
                  aria-label="How can we help you?" 
                  name="helpType"
                  value={formData.helpType} 
                  onChange={handleChange}
                  required
                >
                  <option hidden value="">How can we help you?</option>
                  <option value="1">I need help with my Food Hunt online order.</option>
                  <option value="2">I found incorrect/outdated information on a page.</option>
                  <option value="3">There is a photo/review that is bothering me and I would like to report it.</option>
                  <option value="4">The website/app are not working the way they should.</option>
                  <option value="5">I would like to give feedback/suggestions.</option>
                  <option value="6">Others.</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3' controlId='name'>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  required
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='p-3 m-4'
                />
              </Form.Group>


              <Form.Group className='mb-3' controlId='email'>
                <Form.Control
                  type="email"
                  placeholder='Email'
                  required
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-3 m-4'
                />
              </Form.Group>

    
              <Form.Group className='mb-3' controlId='number'>
                <Form.Control
                  type='number'
                  placeholder='Mobile Number (Optional)'
                  name='mobile'
                  value={formData.mobile}
                  onChange={handleChange}
                  className='p-3 m-4'
                />
              </Form.Group>

          
              <Form.Group className='mb-3' controlId='message'>
                <Form.Control
                  as="textarea"
                  rows={8}
                  cols={8}
                  placeholder='Type Message Here.'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='m-4 p-3'
                />
              </Form.Group>

              <Button variant='danger' className='w-25 m-4' type='submit'>Submit</Button>
            </Form>
          </Col>

          <Col xs={12} md={6} lg={5} className="d-flex flex-column align-items-center gap-4">
            <div className='w-100 custom-card'>
              <Card className='shadow-lg rounded mx-auto card-container-1'
               data-aos="zoom-in"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-easing="ease-in-out">
                <Card.Body>
                  <Card.Title className='card-title' >Report a Safety Emergency</Card.Title>
                  <Card.Text className='card-text text-muted'>
                    We are committed to the safety of everyone using Food Hunt.
                  </Card.Text>
                  <Card.Link href="/report" className='text-danger' style={{ textDecoration: "none", fontSize: "20px" }}>Report Here</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div className=' w-100 custom-card'>
              <Card className='shadow-lg rounded mx-auto card-container-1'
               data-aos="flip-right"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-easing="ease-in-out">
                <Card.Body>
                  <Card.Title className='card-title'>Issue with your live order?</Card.Title>
                  <Card.Text className='text-muted card-text'>
                    Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <hr style={{ border: "2px dashed orange", margin: "0", padding: "0" }} />
        <Row className='m-2'>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default Contact;
