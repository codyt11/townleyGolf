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
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/course-search">Course Search</Nav.Link>
            <Nav.Link href="/hot100">Hot100</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/weather">Weather</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className='about'>
        <div>
          <h1>Everything for your<br/> golf life in one spot!</h1>
          <h6>Track your favorite courses, Check the Weather<br/> Keep up with LeaderBoards<br/> follow the newest golf tech and more!</h6>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
