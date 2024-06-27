import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Facebook from "./facebooki";
import Insta from "./instai";
import Twit from "./twwii"

const UserDetails = ({ user }) => {
  if (!user) {
    return <div className="text">Select a user to see details</div>;
  }

  return (
  
    <Card className="mb-4 mt-5">
      <Card.Body className="flex2">
        
        <Row>
          <Col
            xs={12}
            sm={4}
            md={3}
            lg={2}
            className="text-center mb-3 mb-md-0"
          >
            <Image
              src={user.avatar}
              roundedCircle
              width="150"
              height="150"
              className="img-fluid img-btn"
            />
          </Col>
          <Col xs={12} sm={8} md={9} lg={10}>
            <Row className="mb-3">
              <Col>
                <Card.Title>{`${user.profile.firstName} ${user.profile.lastName}`}</Card.Title>
                <Card.Subtitle className="text-muted">
                  @{user.profile.username}
                </Card.Subtitle>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <h5>Bio</h5>
                <Card.Subtitle className="text-muted">
                  I am {user.jobTitle}, {user.Bio}
                </Card.Subtitle>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <h5>Details</h5>
                <Card.Subtitle className="text-muted mt-2">
                  Name: {`${user.profile.firstName} ${user.profile.lastName}`}
                </Card.Subtitle>
                <Card.Subtitle className="text-muted mt-2">
                  Email: {user.profile.email}
                </Card.Subtitle>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Facebook/>
                <Insta/>
                <Twit/>
                <button className="btnn m-2">More</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
