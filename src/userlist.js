import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userlist.css'
import { ListGroup, Spinner, Image, FormControl, InputGroup, Card, Col, Row } from 'react-bootstrap';

const UserList = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <div>No data to show</div>;
    }
    const reversedArr = [...users].reverse()
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search users"
                   />
            </InputGroup>
        
             <ListGroup className='use'>
        {reversedArr.map((user, index) => (
          <ListGroup.Item key={index} className='flex1' onClick={() => onSelectUser(user)} action>
            
              <Card.Body>
                <Row className='p-1'>
                  <Col xs={2}>
                    <Image src={user.avatar} roundedCircle fluid className='w-30 user-img'/>
                  </Col>
                  <Col xs={10}>
                    <Card.Title>{user.profile.firstName + " " + user.profile.lastName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.jobTitle}</Card.Subtitle>
                  </Col>
                </Row>
              </Card.Body>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
            
        </>
    );
};

export default UserList;
