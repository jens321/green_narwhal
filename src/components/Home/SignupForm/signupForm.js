import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './signupForm.css'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.login()
  }

  render () {
    return (
      <div>
        <h2 className="signup-header">Signup</h2>
        <hr />
        <Form>
          <FormGroup>
            <Label for="full-name-input">Full Name</Label>
            <Input type="name" name="name" id="full-name-input" placeholder="Full Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email-input">Email</Label>
            <Input type="email" name="email" id="email-input" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password-input">Password</Label>
            <Input type="password" name="password" id="password-input" placeholder="Password" />
          </FormGroup>
          <Button className="signup-button">Signup</Button>
          <p>Already have an account? <a href="#" onClick={this.handleClick}>Login here.</a></p>
        </Form>
      </div>
    )
  }
}

export default SignupForm