import { FaHeart } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';

const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="home">
            <img 
              src={logo} 
              width="30"
              height="30"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="home"><FaHeart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;