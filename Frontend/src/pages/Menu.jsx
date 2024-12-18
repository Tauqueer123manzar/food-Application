import React from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import foodData from '../../fooddata'
import Footer from '../components/Footer'
const Menu = () => {
    return (
        <>
            <Container fluid style={{ width: "100%", height: "100%" }} className='mt-2'>
                <h1 className='text-center' style={{ marginTop: "75px", fontFamily: "initial", fontWeight: "bold" }}>Our Food Menu</h1>

                <Row className='d-flex justify-content-center'>
                    <Col xs={12} md={6} lg={12} className='d-flex justify-content-center'>
                        <Button variant="danger" style={{ width: "120px", borderRadius: "30px", height: "65px" }} className='shadow p-2 m-1'>All</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Chicken Biryani</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Mutton Biryani</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Cake</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Burger</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Pizza</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Shawarma</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Veg Biryani</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Chole</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Samosa</Button>
                        <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Biscuit</Button>
                    </Col>
                </Row>

                <div className='d-flex justify-content-center mt-5' style={{ width: "100%", height: "100%" }}>
                    <Row className="p-2">
                        {foodData.map((data) => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={data.id}>
                                <Card style={{ width: "21rem",height:"375px" }}>
                                    <Card.Img variant="top" src={data.image} alt={data.title} style={{height:"200px"}} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>Price: ₹{data.price}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Menu
