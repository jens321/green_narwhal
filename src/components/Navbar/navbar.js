import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Nav } from 'reactstrap'
import firebase from '../../backend/firebase'
import './navbar.css'

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signOut() {
    firebase.auth()
            .signOut()
            .then((result) => {
              console.log(result)
              window.location = '/'
            })
            
  }

  render() {
    return (
      <Navbar className="navigation" color="light" light expand="md">
        <NavbarBrand href="#"><h1 className="navbar-header">Green Narwhal</h1></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" className="nav-link">Your Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="nav-link" onClick={this.signOut}>Sign Out</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar