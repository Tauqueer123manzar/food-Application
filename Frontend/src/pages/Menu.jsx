// import React from 'react'
// import { Button, Container, Row, Col, Card } from 'react-bootstrap'
// import Footer from '../components/Footer'
// import '../App.css'
// import Foodmenu from '../components/Foodmenu'
// import Report from '../components/Report';
// const Menu = () => {
//     return (
//         <>
//             <Container fluid style={{ width: "100%", height: "100%",backgroundColor:"lightpink" }} className='mt-2'>
//                 <h1 className='text-center' style={{ marginTop: "75px", fontFamily: "initial", fontWeight: "bold" }}>Our Food Menu</h1>

//                 <Row className='d-flex justify-content-center'>
//                     <Col xs={12} md={6} lg={12} className='d-flex justify-content-center'>
//                         <Button variant="danger" style={{ width: "120px", borderRadius: "30px", height: "65px" }} className='shadow p-2 m-1'>All</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Chicken Biryani</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Mutton Biryani</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Cake</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Burger</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Pizza</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Shawarma</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Veg Biryani</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Chole</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Samosa</Button>
//                         <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500" }} className='shadow p-2 m-1 text-danger'>Biscuit</Button>
//                     </Col>
//                 </Row>
//                 <Foodmenu/>
//             </Container>
//             <div>
//                 <Footer/>
//             </div>
//         </>
//     )
// }

// export default Menu

import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import '../App.css';
import Foodmenu from '../components/Foodmenu';

const Menu = () => {
  return (
    <>
      <Container fluid style={{ width: "100%", height: "100%"}} className='mt-2'>
        <h1 className='text-center' style={{ marginTop: "75px", fontFamily: "initial", fontWeight: "bold" }}>Our Food Menu</h1>

        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={6} lg={12} className='d-flex justify-content-center flex-wrap'> 
            <Button variant="danger" style={{ width: "120px", borderRadius: "30px", height: "65px", margin: "5px" }} className='shadow p-2'>All</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Chicken Biryani</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Mutton Biryani</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Cake</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Burger</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Pizza</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Shawarma</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Veg Biryani</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Chole</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Samosa</Button>
            <Button variant="white" style={{ width: "120px", borderRadius: "30px", height: "65px", fontWeight: "500", margin: "5px" }} className='shadow p-2 text-danger'>Biscuit</Button>
          </Col>
        </Row>
        <Foodmenu />
        <hr style={{ height: "2px", backgroundColor: "black" }}/>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;