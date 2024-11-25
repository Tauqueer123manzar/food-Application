import React from 'react'
import { Container,Row,Col,Form,Button,Card} from 'react-bootstrap'
import '../App.css'
import Footer from './Footer'
const Report = () => {
  return (
    <>
     <Container fluid style={{width:"99%",height:"100%",margin:"0",padding:"0"}}>
       <div style={{width:"100%",height:"100px",backgroundColor:"rgb(168, 50, 68)"}}>
         <h1 className='p-4 d-flex justify-content-center text-white' style={{marginTop:"60px",fontSize:"35px"}}>Foody Hunt</h1>
       </div>
       <div  className="mt-5" style={{width:"90%",height:"400px",margin:"auto",padding:"auto",borderRadius:"5px",backgroundColor:"rgb(168, 50, 68)",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1 className='p-4 text-center text-white' style={{marginTop:"80px",fontSize:"45px",fontFamily:"sans-serif"}}>Report an Accident Or Emergency </h1>
       </div>
    {/* ====================================== form section ================================================== */}
       <Row className='mt-5'>
          <Col xs={10} md={6} lg={7} className='mb-3'>
            <Form className='p-5 shadow-lg rounded' style={{marginLeft:"90px",width:"100%",height:"100%"}}>
              <Form.Group className="mb-3" controlId="help">
                <Form.Select className='p-3 m-2' aria-label="How can we help you?">
                  <option hidden>How can we help you?</option>
                  <option value="1">Report an Accident</option>
                  <option value="2">Report an Incident</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3' controlId='name'>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  required
                  className='p-3 m-2'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='email'>
                <Form.Control
                  type="email"
                  placeholder='Email'
                  required
                  className='p-3 m-2'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='number'>
                <Form.Control
                  type='number'
                  placeholder='Mobile Number (Optional)'
                  className='p-3 m-2'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='message'>
                <Form.Control
                  as="textarea"
                  rows={8}
                  cols={8}
                  placeholder='Type Message Here.'
                  className='m-2 p-3'
                />
              </Form.Group>
              <div className='p-2 m-2' style={{width:"100%",height:"65px",borderRadius:"5px",border:"1px solid black"}}>
                <p>Please use this form only for accident or abuse related emergency situations. For order or other general queries <span><a href='/contact' style={{textDecoration:"none"}}> contact us here.</a></span></p>
              </div>

              <Button variant='danger' className='w-25 m-2' type='submit'>Send Message</Button>
            </Form>
          </Col>

          <Col xs={10} md={6} lg={5}>
          <div className=' ' style={{marginLeft:"100px",width:"60%"}}>
              <Card className='shadow-lg rounded mx-auto' style={{height:"150px"}}>
                <Card.Body>
                  <Card.Title className='card-title'>Disclaimer</Card.Title>
                  <Card.Text className='text-muted card-text'>
                  Please use this page to report a serious incident or accident only. For order related queries, please use our chat support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
       </Row>
       <hr style={{border:"2px solid red",margin:"0",padding:"0"}}/>
      <Row className='p-4'>
        <Footer/>
      </Row>
     </Container>
    </>
  )
}

export default Report
