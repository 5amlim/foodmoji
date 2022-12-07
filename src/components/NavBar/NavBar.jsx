
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
            <Nav.Link href="/cart">My Cart</Nav.Link>

          </Nav>
          <Nav>
            {user?
            <>
                <NavDropdown title={`Welcome, ${user.name}!`} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/orders">Order History</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="" onClick={handleLogOut}>
                        Log Out
                    </NavDropdown.Item>
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