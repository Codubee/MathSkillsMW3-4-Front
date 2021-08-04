import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
              <Link className="nav-link" to="/skills">Skill Level</Link>
            </NavItem>
            <NavItem> 
              <Link className="nav-link" to="/team">About Us</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/github">Github</Link>
              {/* <NavLink href="https://github.com/Codubee/MathSkillsMW3-4-Front">Github</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;