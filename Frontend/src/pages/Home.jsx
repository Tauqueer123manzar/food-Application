import {React, useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import Exploremenu from '../components/Exploremenu';
import food from '../assets/food.png';
// import food from '../assets/food hunt.png';
import Footer from '../components/Footer';
import Foodmenu from '../components/Foodmenu';
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <>
      <Container fluid style={{width:"100%",height:"100%"}}>
        <Row className='mt-5'>
          <Col xs={12} md={6} lg={5}>
            <h1 className='mt-3 p-4' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px" }}>
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
            <p className='p-4' style={{fontSize:"22px",fontFamily:"initial"}}>Explore the best flavors from local favorites and international cuisines. Get your cravings satisfied with quick and easy delivery, right to your door.</p>
            <h3 className='p-4' style={{fontFamily:"cursive"}}>Explore Our Popular Categories</h3>
            <Button className='btn btn-outline-warning' href='/service' style={{fontWeight:"600",fontSize:"20px",height:"55px",width:"180px",marginLeft:"25px"}}>Explore Services</Button>
          </Col>
          <Col xs={12} md={5} lg={7}>
             <img src={food} className="rounded mt-2" alt='food image' width={"100%"} height={"100%"}
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
             />
          </Col>
        </Row>

        {/* =================================== Food categories ============================================= */}
        <Exploremenu category={category} setCategory={setCategory}/>
             <Foodmenu/>
        <hr style={{border:"2px dashed orange", margin:"0",padding:"0"}}/>
      <Footer/>
      </Container>
    </>
  )
}

export default Home
