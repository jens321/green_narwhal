import React, { Component } from 'react'
import Navbar from '../Navbar/navbar'
import { Container, Row, Col, FormGroup, Input, Form, Label, Button} from 'reactstrap'
import './joinParty.css'

class JoinParty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 20,
      discount: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      total: this.state.total - parseInt(e.target.value),
      discount: this.state.discount + parseInt(e.target.value)
    })
  }

  render() {
    return (  
      <div>
        <Navbar></Navbar>
        <Container>
          <Row>
            <Col md="6">
              <h2 className="join-party-header">Fried Rice by Alvin Ng</h2><hr />
              <Form>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" value="3" onChange={this.handleChange} />{' '}
                    Rice (6 cups) - $3.00<br />
                    <Input type="checkbox" value="2" onChange={this.handleChange} />{' '}
                    Sweet corn - $2.00<br />
                  </Label>
                </FormGroup>
              </Form>
            </Col>
            <Col md="6">
              <h2 className="join-party-header">Checkout</h2><hr />
              <p>To enter the party, you currently have to pay {this.state.total} dollars.</p>
              <p>Current discount: ${this.state.discount}</p>
              <Button onClick={this.authorize_payment}>Approve Payment</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default JoinParty