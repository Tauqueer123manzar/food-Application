import React from 'react'
import { Container,Row,Col,Image} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import food from '../assets/food.png'
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
import Searchbar from './Searchbar';
import '../App.css';
const Exploremenu = ({category,setCategory}) => {
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
  return (
    <>
     <Container fluid style={{width:"100%",height:"100%"}}>
     <Row className='my-2 justify-content-center align-items-center search-box'>
        <h2 className="text-center my-4" style={{fontFamily:"italic",fontWeight:"bold"}}>Explore our food menu</h2>
        <div className="search-container">
          <Searchbar className="search-bar"/>
        </div>
        <p className='text-center text-muted w-100 paragraph' style={{marginTop:"110px"}}>Dive into a world of culinary delights with our carefully curated food menu.<br></br>
        From mouth-watering appetizers to indulgent desserts we have something special just for you..<br></br></p>
        <Carousel responsive={responsive}>
          {foodData.map((food,index)=>(
              <Col xs={12} md={4} lg={12} key={index} className='d-flex flex-column align-items-center menu-item'
                onClick={()=> setCategory(prev=> prev === food.title ? "All":food.title)}>
                <Image 
                  src={food.image} className={category === food.title ? "active":" "}
                  alt={food.title}
                  roundedCircle
                  style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                  />
                  <motion.p
                   className="text-center"
                   initial={{opacity:0,y:-20}}
                   animate={{opacity:1,y:0}}
                   transition={{duration:0.7}}
                   >{food.title}</motion.p>
              </Col>
            )
          )}
          </Carousel> 
        </Row>  
     </Container>
    </>
  )
}

export default Exploremenu
