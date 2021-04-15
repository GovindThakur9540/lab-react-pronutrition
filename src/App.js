import React, { Component } from 'react'
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import data from './Ingredients/data'
import Nav from './components/Nav'
import './App.css';

export default class App extends Component {
  constructor() {
      super()
      this.state = { items: [...data.items].slice(0, 4) }
  }

  // when the user tries to search any particular item this function retreives those items
  // and shows user those items
  search = (e) => {
      const food = e.target.value
      this.setState(() => {
          return {
              items: data.items.filter(item => {
                  if (item.name.toLowerCase().includes(food.toLowerCase()))
                      return true
                  return false
              }).map(item => item).slice(0, 4)
          }
      })
  }

  render() {
      return (
          <React.Fragment>
              <Nav/>
              <Search search={this.search} />
              <FoodBox {...this.state} />
          </React.Fragment>
      )
  }
}
