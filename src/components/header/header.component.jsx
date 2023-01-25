import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
    <Navbar className='nav' expand="lg">
      <Container className='links navbar-dark'>
        <Navbar.Brand href="#home">Townley Golf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link-title me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Course Search</Nav.Link>
            <Nav.Link href="#link">Hot100</Nav.Link>
            <Nav.Link href="#link">Leaderboard</Nav.Link>
            <Nav.Link href="#link">Weather</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
