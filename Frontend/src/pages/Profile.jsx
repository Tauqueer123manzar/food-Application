import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import "../App.css";
import Footer from "../components/Footer";

const Profile = ({ user }) => {
  return (
    <Container fluid className="profile-header p-0">
      <Card className="text-white">
        <Card.Img
          src="https://tse2.mm.bing.net/th?id=OIP.080qvOsYDXm__pKAfhF7_wHaCK&pid=Api&P=0&h=180"
          alt="Banner Image"
          className="banner-img"
        />
        <Card.ImgOverlay className="overlay d-flex align-items-end">
          <Row className="w-100">
            <Col md={3} className="d-flex justify-content-center">
              <Image
                src={user.profilePicture}
                roundedCircle
                className="profile-pic"
                alt="Profile"
              />
            </Col>

            {/* User Info */}
            <Col md={6} className="text-start">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-location ">{user.location}</p>
            </Col>

            {/* Edit Profile Button */}
            <Col
              md={3}
              className="d-flex justify-content-end align-items-center"
            >
              <Button variant="danger" className="edit-profile-btn">
                ✏️ Edit Profile
              </Button>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>

      {/* Stats */}
      <Row className="stats-row text-center mt-3">
        <Col>
          <h5>Reviews</h5>
          <p>{user.reviews}</p>
        </Col>
        <Col>
          <h5>Photos</h5>
          <p>{user.photos}</p>
        </Col>
        <Col>
          <h5>Followers</h5>
          <p>{user.followers}</p>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default Profile;
