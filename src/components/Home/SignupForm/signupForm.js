import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import './signupForm.css'

import firebase from '../../../backend/firebase'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      full_name: "",
      email: "",
      password: "",
      err: ""
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleClick (e) {
    this.props.login()
  }

  changeInput (e) {
    this.setState({
      err: "",
      [e.target.name]: e.target.value
    })
  }

  handleSignup (e) {
    firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
              this.setState({
                err: err.message
              })
            })

  }

  render () {
    return (
      <div>
        <h2 className="signup-header">Signup</h2>
        <hr />
        <Form>
          <FormGroup>
            <Label for="full-name-input">Full Name</Label>
            <Input type="name" name="full_name" id="full-name-input" placeholder="Full Name" onChange={this.changeInput}/>
          </FormGroup>
          <FormGroup>
            <Label for="email-input">Email</Label>
            <Input type="email" name="email" id="email-input" placeholder="Email" onChange={this.changeInput}/>
          </FormGroup>
          <FormGroup>
            <Label for="password-input">Password</Label>
            <Input type="password" name="password" id="password-input" placeholder="Password" onChange={this.changeInput}/>
          </FormGroup>
          {
            (this.state.err) ? <Alert color="danger">{this.state.err}</Alert> : ""
          }
          <Button className="signup-button" onClick={this.handleSignup}>Signup</Button>
          <p>Already have an account? <a href="#" onClick={this.handleClick}>Login here.</a></p>
        </Form>
      </div>
    )
  }
}

export default SignupForm