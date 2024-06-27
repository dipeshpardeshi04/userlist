import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "./userlist";
import UserDetails from "./userdetails";
import NavBar from "./NavBar";
const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={4} className="border-end scr">
            <h2>Users</h2>
            <UserList onSelectUser={setSelectedUser} />
          </Col>

          <Col md={8}>
            <UserDetails user={selectedUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
