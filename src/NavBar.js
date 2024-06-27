import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary" style={{borderBottom:"1px solid gray"}}>
      <Container>
        <Navbar.Brand style={{color:"rgb(131, 79, 252)", fontSize:"30px",fontWeight:"500"}} href="#home">UserList</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Developed By: Dipesh
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;