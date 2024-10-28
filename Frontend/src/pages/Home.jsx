import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import food from '../assets/food.png'
import Footer from '../components/Footer';
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
  return (
    <>
      <Container fluid style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <h1 className='mt-3 p-4' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px" }}>
              <Typewriter
                words={['Delicious Food, Delivered Fresh.', 'Crave, Order, Enjoy!', 'Tasty Treats Anytime!']}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={80}
                deletedspeed={50}
                delayspeed={2000}
              />
            </h1>
            <p className='p-4' style={{fontSize:"22px",fontFamily:"initial"}}>Explore the best flavors from local favorites and international cuisines. Get your cravings satisfied with quick and easy delivery, right to your door.</p>
            <h3 className='p-4' style={{fontFamily:"cursive"}}>Explore Our Popular Categories</h3>
            <Button className='btn btn-outline-warning' href='/service' style={{fontWeight:"600",fontSize:"20px",height:"55px",width:"180px",marginLeft:"25px"}}>Explore Now</Button>
          </Col>
          <Col xs={12} md={5} lg={7}>
             <img src={food} className="rounded mt-2" alt='food image' width={"100%"} height={"100%"}/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Home
