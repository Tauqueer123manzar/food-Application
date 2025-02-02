import { React, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import Exploremenu from '../components/Exploremenu';
import food from '../assets/food.png';
import Particlesbackground from '../components/Particlesbackground';
import Footer from '../components/Footer';
import Foodmenu from '../components/Foodmenu';
import '../App.css';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      {/* Full-screen container */}
      <Container fluid style={{ width: "100%", height: "100vh", padding: 0, margin: 0 }}>
        
        {/* Particles background only for the top section */}
        <div style={{
          position: "absolute", 
          top: 0, left: 0,
          right:0, 
          width: "100%", 
          // height: "100vh",
          zIndex: -1
        }}>
          <Particlesbackground />
        </div>

        {/* Main content section */}
        <Row className='mt-5' style={{margin:0,padding:0,left:0,right:0}}>

          {/* Left Section: Text */}
          <Col xs={12} md={6} lg={5} className="d-flex flex-column justify-content-center text-center text-md-start">
            <h1 className='mt-3 p-4' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px", color: "white" }}>
              <Typewriter
                words={['Delicious Food, Quality.', 'Crave, Order, Enjoy!', 'Tasty Treats Anytime!']}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={80}
                deletedspeed={50}
                delayspeed={2000}
              />
            </h1>
            <p className='p-4' style={{ fontSize: "22px", fontFamily: "initial", color: "white" }}>
              Explore the best flavors from local favorites and international cuisines. Get your cravings satisfied with quick and easy delivery, right to your door.
            </p>
            <h3 className='p-4' style={{ fontFamily: "cursive" }}>Explore Our Popular Categories</h3>
            <Button className='btn btn-outline-warning service_button' href='/service' style={{ fontWeight: "600", fontSize: "20px", height: "55px", width: "180px", marginLeft: "25px" }}>
              Explore Services
            </Button>
          </Col>

          {/* Right Section: Image */}
          <Col xs={12} md={6} lg={7} className="d-flex justify-content-center">
            <img 
              src={food} 
              className="rounded mt-2" 
              alt='food image' 
              style={{ width: "100%", height: "auto" }} 
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            />
          </Col>
        </Row>

        {/* Food categories section */}
        <div style={{ position: "relative", zIndex: 1, backgroundColor: "white",margin:0,padding:0,top:0,left:0}}>
          <Exploremenu category={category} setCategory={setCategory} />
          <Foodmenu />
          
          <hr style={{ border: "1px solid gray", margin: "0", padding: "0" }} />
          
          {/* Footer */}
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Home;
