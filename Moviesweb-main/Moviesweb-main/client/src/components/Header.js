import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <NavDropdown title="Whate's New" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">
                  Register here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        fluid
        style={{
          background: "gray",
          color: "white",
          textAlign: "start",
          paddingLeft: "7%",
          paddingBottom: "8px",
        }}
      ></Container>
    </div>
  );
}

export default Header;
