import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Nav } from 'reactstrap'

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
            </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar