import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Nav } from 'reactstrap'
import firebase from '../../backend/firebase'

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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">Green Narwhal</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Your Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.signOut}>Sign Out</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar