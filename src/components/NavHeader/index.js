import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavItem, Navbar, Nav } from "react-bootstrap";
const NavHeader = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header />
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>

          <LinkContainer to="/about">
            <NavItem>Benefits</NavItem>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <NavItem>Contact Us</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
