
import './burger-menu.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../login/login';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BurgerMenu() {
    return (
        <Navbar key="sm" expand="sm" className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-sm'
              aria-labelledby="offcanvasNavbarLabel-expand-sm"
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Login />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}

export default BurgerMenu;