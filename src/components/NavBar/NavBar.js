import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'


// The navigation bar at the top of the screen, directing to the add page and displaying the name of the program
const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand className={"brand"}>Reading Timer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="add">Add new text</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;