import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

//iamges :V

import logo from "../img/logo-urgegas.png";

const Styles = styled.div`
  .navbar {
    background-color: #052d3d;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: #fd9b2f;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover {
      color: #fd9b2f;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  img {
    margin-left: 4em;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Cerrar Sesion</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
