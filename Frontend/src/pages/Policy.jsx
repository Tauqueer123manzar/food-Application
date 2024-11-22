import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import '../App.css';
const Policy = () => {
  return (
    <Container fluid className="py-5 mt-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#007bff' }}>
                Terms and Conditions
              </h1>
              <p className="lead text-muted text-center">
                Please read these terms and conditions carefully before using the Foody application.
              </p>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. Introduction</Accordion.Header>
                  <Accordion.Body>
                    Welcome to Foody! By accessing or using our application, you agree to be bound by these
                    terms and conditions. If you do not agree to these terms, please do not use our service.
                    Foody reserves the right to modify these terms at any time, and users will be notified of
                    changes accordingly.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. User Responsibilities</Accordion.Header>
                  <Accordion.Body>
                    As a user, you are responsible for maintaining the confidentiality of your account
                    information and password. You agree not to use the app for any illegal activities, and
                    must ensure that all information you provide is accurate and up-to-date.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. Privacy Policy</Accordion.Header>
                  <Accordion.Body>
                    We value your privacy. All personal information is stored securely. We do not share your
                    information with third parties without your consent. For more information on how we protect
                    your privacy, please refer to our <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>4. Payment and Transactions</Accordion.Header>
                  <Accordion.Body>
                    Payments for food orders placed through the app will be processed securely via trusted
                    payment gateways. You agree to provide accurate and valid payment information. Foody is
                    not responsible for any payment errors or discrepancies.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>5. User Agreement</Accordion.Header>
                  <Accordion.Body>
                    By using the Foody app, you agree to comply with all terms outlined in this agreement.
                    You understand that Foody reserves the right to suspend or terminate your account at any
                    time for violations of these terms.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>6. Intellectual Property</Accordion.Header>
                  <Accordion.Body>
                    All content, designs, and materials on the Foody app are protected by intellectual property
                    laws. You are granted a limited, non-exclusive license to use the app for personal purposes
                    only. Any unauthorized use of our intellectual property is prohibited.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>7. Limitation of Liability</Accordion.Header>
                  <Accordion.Body>
                    Foody will not be held liable for any indirect, incidental, or consequential damages arising
                    from your use of the app. We do not guarantee that the app will be free from errors or
                    interruptions.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>8. Governing Law</Accordion.Header>
                  <Accordion.Body>
                    These terms and conditions are governed by the laws of [Your Country]. Any disputes will
                    be resolved in the courts located in [Your City].
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>9. Contact Information</Accordion.Header>
                  <Accordion.Body>
                    If you have any questions or concerns regarding these terms, please contact us at:
                    <br />
                    <strong>Email:</strong> support@foodyapp.com <br />
                    <strong>Phone:</strong> +123 456 7890
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>10. Changes to Terms</Accordion.Header>
                  <Accordion.Body>
                    Foody reserves the right to modify these terms at any time. Any changes will be posted on
                    this page, and continued use of the app will constitute your acceptance of these changes.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="text-center mt-4">
                <Button href="/" variant="primary" className="px-4 py-2">
                  Go Back to Home
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Policy;
