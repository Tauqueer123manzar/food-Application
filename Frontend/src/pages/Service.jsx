import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import Footer from '../components/Footer';
import { MdStarRate } from "react-icons/md";
import '../App.css';
const Service = () => {
  const reviews = [
    { id: 1, name: "Md Tauqueer Manzar", title:"Sr.Software Enginer", review: "Amazing service! Loved it Your food was delicious and food quality was very good.I will recommend you to my friends.", stars: 5 },
    { id: 2, name: "Mehnaz Fatma",title:"Software Enginer",review: "The food was delicious! Your food was delicious and food quality was very good.I will recommend you to my friends.", stars: 4 },
    { id: 3, name: "Abhisek Kumar",title:"Developer", review: "Quick delivery and great quality Your food was delicious and food quality was very good.I will recommend you to my friends.", stars: 5 },
    { id: 4, name: "Sweta Kumari",title:"Devops Devloper", review: "Quick delivery and great quality Your food was delicious and food quality was very good.I will recommend you to my friends.", stars: 4.5 }
  ];

  const foodData = [
    {
      id: 1,
      image: "https://www.nourish-and-fete.com/wp-content/uploads/2017/03/homemade-margherita-pizza-4.jpg",
      title: "Margherita Pizza",
      description: "Classic cheese and tomato pizza.",
      price: 299
    },
    {
      id: 2,
      image: "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg",
      title: "Chicken Biryani",
      description: "Enjoy With this Biryani Delight.",
      price: 349
    },
    {
      id: 3,
      image:"https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenWrap.webp",
      title: "Chicken Wrap",
      description: "Healthy greens with crispy chicken.",
      price: 199
    },
    {
      id: 4,
      image: "https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg",
      title: "Veggie Burger",
      description: "Loaded with fresh vegetables and sauces.",
      price: 249
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsatcpQ9YcalOhpJgSSFE_EQT1RZewU5z419kpgHK0vMczpSKQQLrEcAuJJPE-b2nA6Y&usqp=CAU",
      title: "Chocolate Cake",
      description: "Rich and moist chocolate delight.",
      price: 150
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ddv6dkCNBk_cjUmfMHlZ28zdJBH9HzGCwg&s",
      title: "Tandoori Chicken",
      description: "Spiced and grilled to perfection.",
      price: 399
    },
    {
      id: 7,
      image: "https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Classic_Caesar_Salad_715_x_477.jpg",
      title: "Caesar Salad",
      description: "Crisp lettuce with Caesar dressing.",
      price: 199
    },
    {
      id: 8,
      image: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",
      title: "Pancakes",
      description: "Fluffy pancakes with syrup.",
      price: 180
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXUd48SZANg0HoPU0gh97NnjDvYMXC30MPesyj0beXMUH-qh4__K8MXIORIRRfALHZnQ&usqp=CAU",
      title: "Mutton Biryani",
      description: "Spicy and flavorful mutton biryani",
      price:239
    },
    {
      id: 10,
      image: "https://i.ytimg.com/vi/pMCS1TR4Wyo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCeC2lFiCss7vWbuWo0gz9BJXTdNA",
      title: "Chicken Chilli",
      description: "Cripsy chicken with spicy chilli.",
      price: 99
    },
    {
      id: 11,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgA47GHL35jZlaar8KhowAFHlzGWNQ2CDrg&s",
      title: "Ice Cream",
      description: "Cold and creamy ice cream.",
      price: 40
    },
    {
      id: 12,
      image: "https://images-gmi-pmc.edge-generalmills.com/51185cec-b4c6-4fbd-965c-4fda7d85a30b.jpg",
      title: "Chicken Shawarma",
      description: "Crunchy and flavorful chicken shawarma.",
      price: 149
    }
  ];
  
  return (
    <>
      <Container fluid style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <Row className='mt-5'>
          <Col xs={12} md={6} lg={5} className='mt-5'>
            <h1 className='mt-3 p-3' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px", color: "orange" }}>
              <Typewriter
                words={["Meals Made Easy, Moments Made Special!"]}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={100}
                deletedspeed={80}
                delayspeed={3000}
              />
            </h1>
            <p className='text-muted p-3' style={{ fontSize: "17px" }}>At <span style={{ color: "orange", fontSize: "20px", fontWeight: "bold",textJustify:"auto"}}>
              Food Hunt</span>,we’re all about bringing deliciousness to your doorstep.
              With a focus on convenience, variety, and quality, our services are designed
              to satisfy every craving and make your dining experience unforgettable.
              Enjoy delicious meals without breaking the bank! Check out our exclusive deals,
              discounts, and cashback offers that add more value to your dining experience.</p>

              <div className='p-3'>
              <Button variant='primary' className='btn btn-outline-warning' href='/menu'><span style={{fontSize:"20px"}}>Explore Menu</span></Button>
              </div>
          </Col>
          <Col xs={12} md={5} lg={7} className='mt-5'>
            <img src='https://cdn.expertphotography.com/wp-content/uploads/2020/05/indian-food-pohtography-platter.jpg' className='rounded mt-3' width={"100%"} height={"90%"}/>
          </Col>
        </Row>
      {/* ================================================== OUR SERVICE ========================================== */}
        <Row className='mt-3'>
          <h1 className='text-center' style={{fontFamily:"times new roman",fontWeight:"bold"}}>Our Service</h1>
          {foodData.map((food) => (
          <Col xs={12} md={4} lg={3} className="mb-4" key={food.id}>
            <Card className='services mt-4'>
              <Card.Img variant="top" src={food.image} height={"250px"} />
              <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
                <h5>₹{food.price}</h5>
                <Button variant="primary" href='/menu'>Go to Menu</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <hr style={{border:"2px dashed orange",margin:"0",padding:"0"}}/>

    {/* ================================================= Footer ================================================= */}
      <Row className='mt-4'>
          <Footer/>
      </Row>
      </Container>
    </>
  )
}

export default Service
