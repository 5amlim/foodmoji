
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar ({user, setUser}) {
    function handleLogOut() {
        userService.logOut();

        setUser(null);
      }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/stylesheets/images/fmlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{' '}
            FOODMoji
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">New Order</Nav.Link>
            <Nav.Link href="/orders">Order History</Nav.Link>

          </Nav>
          <Nav>
            {user?
            <>
                <NavDropdown title={`Welcome, ${user.name}!`} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/cart">My Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="" onClick={handleLogOut}>Log Out</NavDropdown.Item>
                </NavDropdown>
            </>
            :
            <Nav.Link eventKey={2} href="">
              Log In
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}