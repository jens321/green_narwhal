import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class startMeal extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="dish-input">Dish</Label>
          <Input type="text" name="dish" id="dish-input" placeholder="Your dish" />
        </FormGroup>
        <FormGroup>
          <Label for="ingredient-input">Add Your Ingredients</Label>
          <Input type="text" name="ingredient" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
      </Form>
    )
  }
}

export default startMeal