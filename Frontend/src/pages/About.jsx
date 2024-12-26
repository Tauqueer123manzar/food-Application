import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import food from "../assets/food.jpg";
import Footer from "../components/Footer";
import { Typewriter } from 'react-simple-typewriter';
import Accordion from 'react-bootstrap/Accordion';
import { FaLeaf, FaUtensils, FaShippingFast, FaSmile } from "react-icons/fa";

const About = () => {
  const missionData = [
    {
      id: 1,
      icon: "fas fa-utensils",
      title: "Culinary Diversity",
      description:
        "We strive to bring diverse cuisines to your doorstep, allowing you to explore and enjoy a world of flavors from the comfort of your home.",
    },
    {
      id: 2,
      icon: "fas fa-clock",
      title: "Timely Deliveries",
      description:
        "With advanced tracking and optimized logistics, we ensure your food arrives fresh and on time, every single time.",
    },
    {
      id: 3,
      icon: "fas fa-heart",
      title: "Customer Satisfaction",
      description:
        "We prioritize your happiness by offering personalized recommendations, discounts, and seamless service for an exceptional experience.",
    },
  ];
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
            height: "70vh",
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

        {/* ========================================== About Section ================================================= */}
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
              At Foody, we believe that food brings people together and creates unforgettable experiences.
              Discover diverse cuisines, savor the finest meals, and let us redefine your dining moments with
              innovation, convenience, and delight.Foody is here to
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
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            />
          </Col>
        </Row>


        {/* ========================================== Our Vision ================================================= */}
        <h1 className="text-center mt-4" style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>Our Vision</h1>
        <Row className="my-4 text-center justify-content-center mx-4">
          {[
            { icon: <FaLeaf size={40} />, title: "Eco-Friendly Practices", text: "Promoting sustainability through eco-friendly packaging and operations." },
            { icon: <FaUtensils size={40} />, title: "Culinary Excellence", text: "Connecting you to the best culinary experiences." },
            { icon: <FaShippingFast size={40} />, title: "Fast Delivery", text: "Ensuring fresh, timely delivery of your favorite meals." },
            { icon: <FaSmile size={40} />, title: "Customer Happiness", text: "Your satisfaction is our priority with unparalleled service." },
          ].map((card, index) => (
            <Col xs={12} sm={6} md={3} key={index} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div className="mb-3" style={{ color: "#ff5722" }}>{card.icon}</div>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="text-muted">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ============================================== Our Mission ================================================== */}
        <Row className="justify-content-center text-center mt-5 mx-4">
          <h2
            className="text-center"
            style={{
              fontFamily: "Times New Roman",
              fontWeight: "bold",
            }}
          >
            Our Mission
          </h2>

          {missionData.map((mission) => (
            <Col
              key={mission.id}
              xs={12}
              md={4}
              lg={3}
              className="p-3"
              style={{
                border: "1px solid #f8d7da",
                background: "#fff",
                borderRadius: "10px",
                margin: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-center">
                <i
                  className={mission.icon}
                  style={{
                    fontSize: "20px",
                    color: "orange",
                    marginBottom: "10px",
                  }}
                ></i>
                <h4 style={{ fontWeight: "600", fontFamily: "Arial" }}>
                  {mission.title}
                </h4>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {mission.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* ======================================= Frequently Asked Questions ======================================== */}
        <Row className="mt-5 justify-content-center">
          <Col xs={12} md={10}>
            <h2 className="text-center" style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>Frequently Asked Questions</h2>
            <Accordion className="my-4 m-4">
              {[
                { question: "What is the Foody app?", answer: "The Foody app connects food lovers with nearby restaurants and delivery services." },
                { question: "How do I create an account?", answer: "Sign up using your email or social media accounts to start your food journey." },
                { question: "Can I customize my order?", answer: "Yes, you can add special instructions for every dish while ordering." },
                { question: "How do I track my order?", answer: "Use the Order History section to view real-time delivery tracking." },
              ].map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        <hr style={{ border: "2px dashed orange", margin: 0, padding: 0 }} />
        <Footer />
      </Container>
    </>
  );
};

export default About;
