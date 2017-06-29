import React, { Component } from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App container'>
        <Header title="My Amazing Cart"/>
        <Cart/>
      </div>
    )
  }
}

export default App
