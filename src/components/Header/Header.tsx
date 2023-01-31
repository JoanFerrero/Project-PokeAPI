import { FaHeart } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux';
import { setMode } from '../../redux/slice/poke';

const Header = () => {
  const dispatch = useCustomDispatch()
  const { poke } = useCustomSelector((state) => state);
  const mode = poke.mode

  const changeColor = () => {
    dispatch(setMode())
  }

    return (
      <Navbar bg={mode} variant={mode} expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link onClick={() => changeColor() }><BsFillMoonStarsFill /></Nav.Link>
              <Nav.Link href="/likes"><FaHeart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;