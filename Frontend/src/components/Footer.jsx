import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <Container fluid className='bg-body-tertiary shadow'>
                <h1 className='m-2' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "50px", color: "orange" }}>Foody Hunt</h1>
                <Row className='m-2'>
                    <Col xs={12} md={4} lg={3}>
                        <p style={{ fontWeight: "400", fontFamily: "initial", fontSize: "25px" }}>About Foody</p>
                        <li style={{ listStyle: "none", padding: "5px" }}>
                            <a href='/' style={{ textDecoration: "none", color: "black" }}>Home</a>
                        </li>
                        <li style={{ listStyle: "none", padding: "5px" }}>
                            <a href='/about' style={{ textDecoration: "none", color: "black" }}>About Us</a>
                        </li>
                        <li style={{ listStyle: "none", padding: "5px" }}>
                            <a href='/service' style={{ textDecoration: "none", color: "black" }}>Service</a>
                        </li>
                        <li style={{ listStyle: "none", padding: "5px" }}>
                            <a href='/contact' style={{ textDecoration: "none", color: "black" }}>Contact</a>
                        </li>
                        <li style={{ listStyle: "none", padding: "5px" }}>
                            <a href='terms' style={{ textDecoration: "none", color: "black" }}>Terms&Policy</a>
                        </li>
                    </Col>

                    {/* =========================================================================================== */}
                    <Col xs={12} md={4} lg={3}>
                        <p style={{ fontWeight: "400", fontFamily: "initial", fontSize: "25px" }}>Help Us</p>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Feedback</li>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Suggest a Restaurant</li>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Report an Issue</li>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Privacy & Safety</li>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>FAQ</li>
                    </Col>

                    {/* ============================================================================================ */}
                    <Col xs={12} md={4} lg={3}>
                        <p style={{ fontWeight: "400", fontFamily: "initial", fontSize: "25px" }}>For Resturants</p>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Partner With Us</li>
                        <li style={{ textDecoration: "none", listStyle: "none", padding: "5px" }}>Apps For You</li>
                    </Col>

                    {/* ============================================================================================ */}
                    <Col xs={12} md={4} lg={3}>
                        <p style={{ fontWeight: "400", fontFamily: "initial", fontSize: "25px" }}>Social Links</p>
                            <ul className='d-flex' style={{textDecoration:"none",listStyle:"none",padding:0,margin:0}}>
                                <li className='p-2'><a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer"><BsInstagram style={{color:"red"}}/></a></li>
                                <li className='p-2'><a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                                <li className='p-2'><a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><FaXTwitter style={{color:"black"}}/></a></li>
                                <li className='p-2'><a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><FaYoutube style={{color:"red"}}/></a></li>
                                <li className='p-2'><a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                            </ul>
                            <p><img className='mt-3' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'  alt='app' height={50} width={200}></img></p>
                            <p><img className='mt-1' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'  alt='app' height={50} width={200}></img></p>
                    </Col>

                    {/* ============================================================================================ */}
                </Row>
            </Container>
        </>
    )
}

export default Footer
