// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar className='Nav' style={{ backgroundColor: "rgb(74, 187, 74)", height: "80px" }} bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img width={80} style={{ borderRadius: "100%" }} src='https://e7.pngegg.com/pngimages/747/155/png-clipart-green-leaf-logo-leaf-mark.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link className="link" to='/'>home</Link></Nav.Link>
            <Nav.Link > <Link className="link" to='/about'>About us</Link></Nav.Link>
            <NavDropdown className='link' title="Apeal" id="navbarScrollingDropdown" >
              <NavDropdown title="Donate For Education" id="" >
                <NavDropdown.Item href="#action3"><Link className="link" to='/donate'>Scholorships</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link className="link" to='/donate'>Uniforms/Books</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <Link className="link" to='/donate'>For software Education</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="dropdown "  title="Donate for Healt service" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"><Link className="link" to='/donate'>Ambulance</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link className="link" to='/donate'>Medical camps</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <Link className="link" to='/donate'>Donate for hospital</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="dropdown" title="Donate for community service" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"><Link className="link" to='/donate'>Food package</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link className="link" to='/donate'>Qurbani</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <Link className="link" to='/donate'>Clean water plants</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="dropdown" title="Donate for rozgaar" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"><Link className="link" to='/donate'>Rikshaw service</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link className="link" to='/donate'>Small shop</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown className="dropdown link" title="Our programms" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><Link className="link" to='/health'>Health</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link className="link" to='/education'>Education & Literacy</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Khud Kafeel(Rozgar)
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="dropdown link" title="Get involved" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">  <Link className="link" to='/volunteer'>Volunteer Programm</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link className="link" to='/donate'>Donate</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Raise funds
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="dropdown link" title="Featured projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">  <Link className="link" to='/school'>School</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Link className="link" to='/hospital'>Hospital</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <Link className="link" to='/contact'>Contact us</Link></Nav.Link>
          </Nav>
          <button className="glow-on-hover" type="button">  <Link className="link" to='/donate'>Donate Now</Link></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;