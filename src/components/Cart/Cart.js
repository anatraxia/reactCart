import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import Create from '../Create/Create'
import GrandTotal from '../GrandTotal/GrandTotal'
import './Cart.css'


export class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      grandTotal: 0,
      subtotals: {}
    }
  }

  deleteProduct = (id) => {
    console.log("Delete Product: " + id);
    let subTotal = this.state.subtotals
    delete subTotal[id]

    let productUpdated =  this.state.products
    productUpdated = productUpdated.filter((product) => {
          return product.itemUUID != id
    })
    let grandtotal = 0
    for (var prop in subTotal){
      grandtotal += subTotal[prop]
    }
    this.setState({
      grandTotal: grandtotal,
      subtotals: subTotal,
      products: productUpdated
    })

  }

  updateGrandTotal = (id, newsubTotal) => {
    let subTotals = this.state.subtotals
    subTotals[id] = newsubTotal

    let grandtotal = 0
    for (var prop in subTotals){
      grandtotal += subTotals[prop]
    }
    this.setState({
      grandTotal: grandtotal,
      subtotals: subTotals
    })

  }


  createProduct = (product) => {
    let newProduct = {
      itemName: product.itemName,
      itemPrice: product.itemPrice,
      itemUUID: product.id
    }
    let productState = this.state.products
    productState.push(newProduct)
    this.setState({
      products: productState
    })
  }

  createProductRecord = () => {
    var productArray = []
    this.state.products.forEach((product, index)=>{
      productArray.push(<ProductRow key={index} title={product.itemName} price={product.itemPrice} productID={product.itemUUID} grandtotal={this.updateGrandTotal} deleteproduct={this.deleteProduct}/>)
    })

    return productArray

  }

  render () {
    let productRow = this.createProductRecord();
    return (
      <section className='row' id='cart'>
        <div className='col-md-12'>
          {productRow}
          <Create createProduct={this.createProduct}/>
          <GrandTotal grandtotal={this.state.grandTotal}/>
        </div>
      </section>
    )
  }
}

export default Cart
