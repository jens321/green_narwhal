import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navbar from '../Navbar/navbar'
import StartMeal from './StartMeal/startMeal'
import Browse from './Browse/browse'

class Dashboard extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {

  //   }
  // }
  render() {
    return (
      <div>
      <Navbar></Navbar>
        <Container>
          <Row>
            <Col md="6">
              <Browse></Browse>
            </Col>
            <Col md="6">
              <StartMeal></StartMeal>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard