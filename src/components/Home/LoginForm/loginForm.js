import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './loginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.register()
  }

  render () {
    return (
      <div>
        <h2 className="login-header">Login</h2>
        <hr />
        <Form>
          <FormGroup>
            <Label for="email-input">Email</Label>
            <Input type="email" name="email" id="email-input" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password-input">Password</Label>
            <Input type="password" name="password" id="password-input" placeholder="Password" />
          </FormGroup>
          <Button className="login-button">Login</Button>
          <p>Need an account? <a href="#" onClick={this.handleClick}>Register here.</a></p>
        </Form>
      </div>
    )
  }
}

export default LoginForm