import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import './loginForm.css'

import firebase from '../../../backend/firebase'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      err: ""
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.login = this.login.bind(this)
  }

  changeInput(e) {
    this.setState({
      err: "",
      [e.target.name]: e.target.value
    })
  }

  handleClick(e) {
    this.props.register()
  }

  login() {
    firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
              window.location = '/dashboard'
            })
            .catch((err) => {
              this.setState({
                err: err.message
              })
            })
  }

  render () {
    return (
      <div>
        <h2 className="login-header">Login</h2>
        <hr />
        <Form>
          <FormGroup>
            <Label for="email-input">Email</Label>
            <Input type="email" name="email" id="email-input" placeholder="Email" onChange={this.changeInput} />
          </FormGroup>
          <FormGroup>
            <Label for="password-input">Password</Label>
            <Input type="password" name="password" id="password-input" placeholder="Password" onChange={this.changeInput} />
          </FormGroup>
          {
            (this.state.err) ? <Alert color="danger">{this.state.err}</Alert> : ""
          }
          <Button className="login-button" onClick={this.login}>Login</Button>
          <p>Need an account? <a href="#" onClick={this.handleClick}>Register here.</a></p>
        </Form>
      </div>
    )
  }
}

export default LoginForm