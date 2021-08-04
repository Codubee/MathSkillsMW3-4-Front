import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
        <NavbarBrand href="/">Math4Bee</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/study">Study</Link>
            </NavItem>
            <NavItem> 
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="https://github.com/Codubee/MathSkillsMW3-4-Front" target="_blank">Github</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;