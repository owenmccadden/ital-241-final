import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <Navbar className={styles['navbar']} bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/artEvolution">Evolution of Art</Nav.Link>
                    <Nav.Link href="/techEvolution">Evolution of Tech</Nav.Link>
                    <Nav.Link href="/chat">Chat with Leonardo</Nav.Link>
                    <Nav.Link href="/art">Art Generated from Leonardo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;