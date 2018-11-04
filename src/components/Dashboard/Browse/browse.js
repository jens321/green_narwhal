import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardHeader, CardFooter, CardBody, Button } from 'reactstrap'
import firebase from '../../../backend/firebase'
import './browse.css'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeParties: []
    }
  }

  componentDidMount () {
    const ingredientsRef = firebase.database().ref('ingredients')
    ingredientsRef.on('value', (snapshot) => {
      let data = snapshot.val()
      let parties = []
      let user = firebase.auth().currentUser
      for (let item in data) {
        if (item !== user.uid) {
          parties = parties.concat(Object.values(data[item]))
        }
      }

      this.setState({
        activeParties: parties
      })
    })
  }

  render() {
    return (
      <div>
        <h3 className="browse-header">Active Cooking Parties</h3><hr />
      {
        this.state.activeParties.map((item, index) => {
          return <Card className="card-meal" key={index}>
                    <CardHeader className="card-header"><strong>{item.host}</strong></CardHeader>
                    <CardBody>
                      <CardTitle>{item.dish}</CardTitle>
                      <CardText>
                        <ul>
                        {
                          item.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                          })
                        }
                        </ul>
                      </CardText>
                      <Button>Join Party</Button>
                    </CardBody>
                    <CardFooter>
                      Up to {item.guest_amount}
                    </CardFooter>
                  </Card>
        })
      }
      </div>
    ) 
  }
}

export default Browse