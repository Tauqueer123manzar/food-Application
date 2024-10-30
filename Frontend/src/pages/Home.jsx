import {React,useState} from 'react'
import { Container, Row, Col, Button,Image} from 'react-bootstrap';
import food from '../assets/food.png'
import Footer from '../components/Footer';
import Cake from '../assets/cake.jpeg';
import chicken_biryani from '../assets/chicken biryani.jpg';
import pizza from '../assets/pizza.jpg';
import Mutton from '../assets/Mutton biryani.jpg';
import chole from '../assets/chole.jpg';
import samosa from '../assets/samosa.jpeg';
import sandwich from '../assets/sanwitch.jpg';
import Shawrma from '../assets/Shawarma.jpg';
import sweet from '../assets/sweet.jpg';
import vegbiryani from '../assets/veg biryani.jpg';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
  const foodData = [
    { title:"Chicken Pizza",image:pizza},
    { title:"Chicken Biryani",image:chicken_biryani},
    { title:"Cake",image:Cake},
    { title:"Burger",image:food},
    { title:"Mutton Biryani",image:Mutton},
    { title:"Shawarma",image:Shawrma},
    { title:"Sweet",image:sweet},
    { title:"Samosa",image:samosa},
    { title:"Chole",image:chole},
    { title:"VegBiryani",image:vegbiryani},
    { title:"Sandwich",image:sandwich},
    { title:"Chole",image:chole},
    { title:"Veg Biryani",image:vegbiryani},
    { title:"Sandwich",image:sandwich},
    { title:"Chole",image:chole},
    { title:"Veg Biryani",image:vegbiryani},
    { title:"Sandwich",image:sandwich},
  ];
  const responsive = {
    superLargeDesktop:{breakpoint:{max:4000,min:1024},items:12},
    desktop:{breakpoint:{max:1024,min:768},items:8},
    tablet:{breakpoint:{max:768,min:464},items:5},
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3},
  };
  const[selectedCategory,setSelectedCategory]=useState(foodData[0]);

  const handleCategoryClick=(food)=>{
    setSelectedCategory(food);
  };
  return (
    <>
      <Container fluid style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
        <Row className='mt-5'>
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

        {/* =================================== Food categories ============================================= */}
        <Row className='my-2'>
        <h2 className="text-center my-4" style={{fontFamily:"intial",fontWeight:"bold"}}>Food Categories</h2>
        <Carousel responsive={responsive}>
          {foodData.map((food,index)=>(
              <Col xs={12} md={4} lg={12} key={index} className='d-flex flex-column align-items-center'>
                <Image 
                  src={food.image}
                  alt={food.title}
                  onClick={()=> handleCategoryClick(food)}
                  roundedCircle
                  style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                  />
                  <p className="text-center">{food.title}</p>
              </Col>
            )
          )}
          </Carousel> 
        </Row>  
      <Footer/>
      </Container>
    </>
  )
}

export default Home
