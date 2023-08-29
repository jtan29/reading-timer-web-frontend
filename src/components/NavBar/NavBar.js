import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Navbar.Brand>Reading Timer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="add">Add new text</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;