import React from 'react';
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';
import './NavMenu.css';

const NavMenu = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">PizzaParlor</NavbarBrand>
            {isAuthenticated ? (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/orders">Orders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    <LogoutButton />
                  </NavLink>
                </NavItem>
              </ul>
            ) : (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    <LoginButton />
                  </NavLink>
                </NavItem>
              </ul>
            )}
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
