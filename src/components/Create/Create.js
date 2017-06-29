import React, { Component } from 'react'
import './Create.css'
import uuid from 'uuid'

export class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemName: "",
      itemPrice: 0,
      id: uuid.v4()
    }
  }

  onChange = (e) => {
    let state = this.state
    if(e.target.name === 'name') {
      state.itemName = e.target.value
    }
    if(e.target.name === 'price') {
      state.itemPrice = e.target.value
    }
    this.setState(state)

  }

  onClick = (e) => {
    this.props.createProduct(this.state)
    this.updateProductValue()
  }

  updateProductValue = () => {
    let state = this.state
    state.itemName = ""
    state.itemPrice = 0
    state.id = uuid.v4()
    this.setState(state);
    let name = document.getElementById('createProductName')
    console.log(name);
    let price = document.getElementById('createProductPrice')
    console.log(price.value);
    name.value =  state.itemName
    price.value = state.itemPrice

  }

  render () {
    return(
      <section className="row create">
        <div className="col-md-2 name">
              <input type="text" id="createProductName" name="name" placeholder="Name" onChange={this.onChange}/>
        </div>
        <div className="col-md-2 price">
            <input type="number" id="createProductPrice" name="price" min="0" placeholder="Price" onChange={this.onChange}/>
        </div>
        <div className="col-md-2 createProduct">
          <button type="button" className="btn btn-success" onClick={this.onClick}>Create</button>
        </div>
      </section>
    )
  }
}

export default Create;
