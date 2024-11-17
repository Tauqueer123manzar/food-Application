import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import food from "../assets/food.jpg";
import Footer from "../components/Footer";
import { Typewriter } from 'react-simple-typewriter';
import Accordion from 'react-bootstrap/Accordion';
const About = () => {
  return (
    <>
      <Container
        fluid
        style={{ margin: 0, padding: 0, overflowX: "hidden" }}
      >
        <div
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "90vh",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
          <h1
            className="text-center text-white"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "35px",
              fontFamily: "sans-serif",
              fontWeight: "550",
              zIndex: 2,
            }}
          >
            Better food for more people
          </h1>
        </div>
        <Row className="mx-0 my-5">
          <Col xs={12} md={6} lg={5} className="p-4">
            <h1 className='mt-1 p-3' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px" }}>
              <Typewriter
                words={['Welcome to Food Hunt!', 'Crave, Order, Enjoy!', 'Tasty Treats Anytime!']}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={80}
                deletedspeed={50}
                delayspeed={2000}
              />
            </h1>
            <p className="text-muted text-justify mt-1 p-3" style={{ fontSize: "16px" }}>
              At Foody, we believe that food brings people together and creates
              unforgettable experiences. Whether you're craving a quick snack, a
              hearty meal, or exploring diverse cuisines, Foody is here to
              satisfy your hunger and connect you with the best culinary
              delights. To make delicious food accessible to everyone while
              promoting convenience, quality, and diversity. We aim to
              revolutionize the way people discover and enjoy food by blending
              technology and taste seamlessly. With real-time tracking and
              optimized delivery routes, we ensure that your food arrives fresh
              and on time. Enjoy special discounts, rewards, and offers tailored
              just for you. Eating out or ordering in has never been more
              rewarding!
            </p>
          </Col>
          <Col xs={12} md={6} lg={6} className="p-4">
            <img
              src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg"
              alt="food image"
              className="rounded img-fluid"
            />
          </Col>
        </Row>
        <hr
          style={{
            border: "4px dashed orange",
            margin: 0,
            padding: 0,
          }}
        />

        {/* ========================================== Our Vision ================================================= */}
        <Row className="justify-content-center text-center">
          <Col xs={12} md={8}>
          <h1 className="text-center mt-4" style={{ fontFamily: "Times New Roman", fontWeight: "bold",borderBottom:"4px solid orange"}}>Our Vision</h1>
            <p className="text-muted p-5" style={{ fontSize: "1rem" }}>
              At <span style={{ color: "#ff5722", fontWeight: "bold" }}>Foody</span>,
              our vision is to revolutionize the way people experience food. 
              We aim to bridge the gap between food enthusiasts and the culinary world 
              by providing a seamless platform for discovering, ordering, and savoring 
              delightful meals. We believe in fostering connections between local restaurants
              and communities. Through innovation and dedication, we strive to make every 
              meal an unforgettable experience, whether you're dining in, taking out, or 
              sharing with loved ones.
            </p>
          </Col>
        </Row>


        {/* ============================================== Our Mission ================================================== */}
        <Row className="justify-content-center text-center">
        <Col xs={12} md={8}>
          <h2 style={{ fontFamily: "Times New Roman", fontWeight: "bold",borderBottom:"4px solid orange"}}>
            Our Mission
          </h2>
          <p className="mt-3 text-muted" style={{ fontSize: "1rem"}}>
            At <span style={{ color: "#ff5722", fontWeight: "bold" }}>Foody</span>, 
            our mission is to bring the joy of delicious food to your fingertips. 
            We are dedicated to offering a platform that makes exploring cuisines, 
            ordering meals, and connecting with local restaurants simple and convenient.
            By leveraging technology and innovation, we aim to create a vibrant 
            ecosystem where customers and food providers thrive together. We are 
            committed to ensuring quality, reliability, and an exceptional food 
            experience for every user, every time.
          </p>
        </Col>
      </Row>
        {/* ======================================= Frequently Asked Questions ======================================== */}
        <Row className="mt-5 justify-content-center">
          <h2 className="text-center" style={{ fontFamily: "Times New Roman",fontWeight:"bold"}}>Frequently Asked Questions</h2>
          <Col xs={12} md={6} lg={8} className="p-4 mb-2">
            <Accordion defaultActiveKey={"0"} >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Q1: What is the Foody app?
                </Accordion.Header>
                <Accordion.Body>
                  A: The Foody app is a platform that connects food lovers with nearby restaurants, cafes, and delivery services. It allows users to browse menus, place orders, and enjoy meals delivered to their doorstep or for dine-in.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Q2: How do I create an account on the Foody app?
                </Accordion.Header>
                <Accordion.Body>
                  A: You can create an account by clicking the Sign Up button on the home page. Enter your name, email address, and phone number, and set a password. Alternatively, you can sign up using your Google or Facebook account.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Q3: Can I customize my food order?
                </Accordion.Header>
                <Accordion.Body>
                  A: Yes! While placing an order, you can add special instructions or modify your preferences (e.g., spice level, extra toppings, or removing ingredients). Simply use the Customize option while selecting your dish.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Q4: How do I track my food delivery?
                </Accordion.Header>
                <Accordion.Body>
                  A: After placing an order, go to the Order History section. You’ll find real-time tracking updates, including your food's preparation status and delivery location on a map.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Q5: How can I cancel my order?
                </Accordion.Header>
                <Accordion.Body>
                  A: You can cancel your order within the first few minutes after placing it. Go to the Order History, select the active order, and click Cancel Order. Note that cancellation policies may vary depending on the restaurant.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Q6: Are there any delivery charges?
                </Accordion.Header>
                <Accordion.Body>
                  A: Delivery charges depend on the restaurant and your location. Some restaurants may offer free delivery during special promotions or for orders above a certain amount.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Q7: What payment options are available?
                </Accordion.Header>
                <Accordion.Body>
                  A: The Foody app supports multiple payment methods, including:
                  Credit/Debit cards
                  UPI (e.g., Google Pay, PhonePe)
                  Cash on Delivery (COD)
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
        <hr
          style={{
            border: "2px dashed orange",
            margin: 0,
            padding: 0,
          }}
        />
        <Row className="mx-0 my-1">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default About;