import React from "react";
import { Container, Row, Col, InputGroup, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <Container fluid className="" style={{ maxWidth: "100%" }}>
      <Row className="d-flex justify-content-center p-3">
        <Col xs={12} md={6}> 
          <InputGroup
            className="rounded-pill p-2"
            style={{
              width: "100%",
              backgroundColor: "wheat",
              overflow: "hidden",
              height:"65px"
            }}
          >
            {/* Left Search Icon */}
            <InputGroup.Text
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <FaSearch color="black" size={20} />
            </InputGroup.Text>

            {/* Search Input */}
            <Form.Control
              type="text"
              placeholder="Search food here..."
              aria-label="Search food here..."
              style={{
                border: "none",
                boxShadow: "none",
                outline: "none",
              }}
            />

            {/* Right Search Icon Button */}
            <Button
              variant="warning"
              style={{
                borderRadius: "80%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaSearch color="white" />
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Searchbar;
