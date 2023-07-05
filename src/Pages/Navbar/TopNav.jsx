import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import IMAGES from "../../Assets/images";
import { useEffect, useState } from "react";

function TopNav() {
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="container ">
      {[false, "sm", "md", "lg", "xl", "xxl"].slice(2, 3).map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={
            !navbar
              ? `mb-3 bg-transparent fixed-top navbar-light`
              : "p-0 fixed-top bg-white"
          }
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={IMAGES.ANIQUEST}
                width="30"
                height="30"
                className="d-inline-block align-top top-logo"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Digital Printing{" "}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 text-white">
                  <Nav.Link
                    href="#action1"
                    // className="text-white me-3"
                    className={!navbar ? `text-white me-3` : "me-3 text-dark"}
                  >
                    Solution
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className={!navbar ? `text-white me-3` : "me-3 text-dark"}
                  >
                    Pricing
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className={!navbar ? `text-white me-3` : "me-3 text-dark"}
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className={!navbar ? `text-white` : " text-dark"}
                  >
                    About
                  </Nav.Link>
                </Nav>
                <Form className="d-flex me-4">
                  <Nav.Link
                    href="#action2"
                    className="text-white align-self-md-center me-3"
                  >
                    Login
                  </Nav.Link>
                </Form>
                <Button
                  variant="outline-success"
                  className="tp-nv-btn p-2 px-4 border-0"
                  // className={!navbar ? ` tp-nv-btn  p-2 px-4 `: "p-2 px-4 bg-white text-dark"}
                >
                  Get Started
                </Button>
                <div className="mt-4 d-md-none ">
                  <div>
                    <Button className="btn-trial px-5 p-2">FREE TRIAL</Button>{" "}
                    <Button className="btn-sign-up p-2 px-3">
                      SIGN UP WITH GOOGLE
                    </Button>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default TopNav;
