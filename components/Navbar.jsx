import { useEffect, useState } from "react";
import router from "next/router";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import nav from "../styles/navbar.module.css";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Router from "next/router";

const MyNavbar = () => {
  useEffect(() => {}, []);

  return (
    <div className={nav.Container}>
      <Head>
        <title>File Verfication System</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Link href="https://shandevelopers.cxscloudsolutions.com/">
        <img src="/logo.jpeg" className={nav.Logo} />
      </Link>

      <Navbar variant="dark" bg="transparent" expand="lg" className={nav.list}>
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  className={nav.link}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  className={nav.link}
                >
                About Us
                </Link>
              </Nav.Link>

              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Projects"
                menuVariant="dark"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item>
                  <Link
                    href="https://ft-foresttown.vercel.app/"
                    as={`https://ft-foresttown.vercel.app/`}
                    style={{color:'black',textDecoration:'none'}}
                  >
                    
                    Shan Orchard
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    href="https://ft-foresttown.vercel.app/"
                    as={`https://ft-foresttown.vercel.app/`}
                    style={{color:'black',textDecoration:'none'}}
                  >
                   Shan City
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    href="https://ft-foresttown.vercel.app/"
                    as={`https://ft-foresttown.vercel.app/`}
                    style={{color:'black',textDecoration:'none'}}
                  >
                  Shan City & Commercial Market
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  style={{color:'#CFA336',textDecoration:'none'}}
                >
                  Shan Orchard
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  className={nav.link}
                >
                  Development Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  className={nav.link}
                >
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="https://ft-foresttown.vercel.app/"
                  as={`https://ft-foresttown.vercel.app/`}
                  className={nav.link}
                >
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
