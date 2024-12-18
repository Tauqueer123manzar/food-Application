import React from 'react'
import { Container,Row,Col,Button,Card } from 'react-bootstrap'
import foodData from '../../fooddata'
const Foodmenu = () => {
  return (
    <Container fluid style={{ width: "100%", height: "100%"}} className='mt-2'>
        <div className='d-flex justify-content-center mt-5' style={{ width: "100%", height: "100%"}}>
                    <Row className="p-2">
                        {foodData.map((data) => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={data.id}>
                                <Card style={{ width: "22rem",height:"375px"}} className='shadow card-box'>
                                    <Card.Img variant="top" src={data.image} alt={data.title} style={{height:"200px"}} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>Price: ₹{data.price}</Card.Text>
                                        <Button variant="primary" className='w-100 mt-5' href='/cart'>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
    </Container>
  )
}

export default Foodmenu
