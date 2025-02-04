import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  BiHome, BiCart, BiFoodMenu, BiPlusCircle, BiUser, 
  BiMessage, BiStar, BiCog, BiLogOut 
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <Container fluid style={{ width: "100%", height: "100vh", padding: 0, margin: 0 }}>
      <Row style={{ margin: 0, padding: 0, marginTop: "70px" }}>
        <Col xs={2} style={{ backgroundColor: "#f8f9fa", height: "100vh" }}>
          <div style={{ position: "fixed", width: "100%", height: "100%", padding: "20px" }}>
            <h3>Admin Panel</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/dashboard" className="active" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiHome style={{ marginRight: "10px" }} /> Dashboard
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/orders" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiCart style={{ marginRight: "10px" }} /> Orders
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/menu" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiFoodMenu style={{ marginRight: "10px" }} /> Menu
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/add" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiPlusCircle style={{ marginRight: "10px" }} /> Add Menu
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/users" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiUser style={{ marginRight: "10px" }} /> Users
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/messages" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiMessage style={{ marginRight: "10px" }} /> Messages
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/reviews" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiStar style={{ marginRight: "10px" }} /> Reviews
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/settings" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiCog style={{ marginRight: "10px" }} /> Settings
                </a>
              </li>
              <li style={{ padding: "10px 0" }}>
                <a href="/admin/logout" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                  <BiLogOut style={{ marginRight: "10px" }} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
