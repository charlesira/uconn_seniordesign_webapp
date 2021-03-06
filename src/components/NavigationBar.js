import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div
`
  .navbar { background-color: #000E2F; }
  a, .navbar-nav, .navbar-light .nav-link:visited {
    color: #FFFFFF;
    &:hover { color: #E4002B; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: #E4002B; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/uconn_seniordesign_webapp/#/">SCORACLE.BB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/uconn_seniordesign_webapp/#/">HOME</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/uconn_seniordesign_webapp/#/contactUs/">CONTACT US</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/uconn_seniordesign_webapp/#/research/">RESEARCH</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/uconn_seniordesign_webapp/#/docs/">DOCUMENTATION</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)