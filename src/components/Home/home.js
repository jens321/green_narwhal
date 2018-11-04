import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import SignupForm from './SignupForm/signupForm'
import LoginForm from './LoginForm/loginForm'
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: "LOGIN"
    }

    this.switchToRegister = this.switchToRegister.bind(this)
    this.switchToLogin = this.switchToLogin.bind(this)
  }

  switchToRegister () {
    this.setState({
      activeTab: "REGISTER"
    })
  }

  switchToLogin () {
    this.setState({
      activeTab: "LOGIN"
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron className="home-jumbo" >
            <h1 className="logo display-3">Green Narwhal</h1>
            <h3 className="logo-lead">Stop cooking alone. Together is better.</h3>
            <hr className="home-divider" />
          </Jumbotron>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            { (this.state.activeTab === "LOGIN") ?
               <LoginForm register={this.switchToRegister}></LoginForm> :
               <SignupForm login={this.switchToLogin}></SignupForm> 
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home