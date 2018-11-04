import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './startMeal.css'

import firebase from '../../../backend/firebase'
import { runInThisContext } from 'vm';

class startMeal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dish: "",
      currIngredient: "",
      ingredients: [],
      guest_amount: 1,
      price: 0.0
    }

    this.addIngredient = this.addIngredient.bind(this)
    this.handleDishChange = this.handleDishChange.bind(this)
    this.handleIngredientChange = this.handleIngredientChange.bind(this)
    this.handleGuestAmountChange = this.handleGuestAmountChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.createCookingParty = this.createCookingParty.bind(this)
  }

  addIngredient(e) {
    if (e.key === "Enter" && this.state.currIngredient.trim() !== "") {
      this.setState({
        currIngredient: "",
        ingredients: this.state.ingredients.concat(this.state.currIngredient)
      })
    }
  }

  handleDishChange (e) {
    this.setState({
      dish: e.target.value
    })
  }

  handleIngredientChange (e) {
    this.setState({
      currIngredient: e.target.value
    })
  }

  handleGuestAmountChange (e) {
    this.setState({
      guest_amount: e.target.value
    })
  }

  handlePriceChange (e) {
    this.setState({
      price: e.target.value
    })
  }

  createCookingParty(e) {
    let user = firebase.auth().currentUser
    const ingredientsRef = firebase.database().ref(`ingredients/${user.uid}`)
    const cookingParty = {
      host: user.displayName,
      dish: this.state.dish,
      ingredients: this.state.ingredients,
      guest_amount: this.state.guest_amount,
      total_price: this.state.price
    }
    ingredientsRef.push(cookingParty)
    
    // reset state
    this.setState({
      dish: "",
      currIngredient: "",
      ingredients: [],
      guest_amount: 1,
      price: 0.0
    })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="dish-input">Dish</Label>
          <Input type="text" name="dish" value={this.state.dish} id="dish-input" placeholder="Your dish" onChange={this.handleDishChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="ingredient-input">Add Your Ingredients</Label>
          <Input type="text" name="ingredient" value={this.state.currIngredient} id="ingredient-input" placeholder="Your ingredient" onChange={this.handleIngredientChange} onKeyPress={this.addIngredient}/>
        </FormGroup>
        <div className="ingredient-area">
            { this.state.ingredients.map((item, index) => {
                return <span key={index} className="ingredient-item">{item}</span>
              }) 
            }
        </div>
        <FormGroup>
          <Label for="amount-input">Max Number of Guests</Label>
          <Input type="text" name="amount" value={this.state.guest_amount} id="amount-input" placeholder="Your amount" onChange={this.handleGuestAmountChange} />
        </FormGroup>
        <FormGroup>
          <Label for="price-input">Total Price</Label>
          <Input type="text" name="price" value={this.state.price} id="price-input" placeholder="Your price" onChange={this.handlePriceChange} />
        </FormGroup>
        <Button onClick={this.createCookingParty}>Start Cooking Party!</Button>
      </Form>
    )
  }
}

export default startMeal