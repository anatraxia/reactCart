import React, { Component } from 'react'
import './ProductRow.css'

export class ProductRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      subtotal: 0,
      quantity: 0
    }
  }

  onChange = (e) => {
    const qty = e.target.value
    const subTotal = this.props.price * qty
    this.props.grandtotal(this.props.productID,subTotal);

    this.setState({
      subtotal: subTotal,
      quantity: qty
    })
    console.log(qty)
  }

  onDelete = (e) => {
    this.props.deleteproduct(this.props.productID)
  }

  render () {
    return (
      <div className='productRow'>
        <div className='col-md-3 title'>
            {this.props.title}
          </div>
        <div className='col-md-3 price'>
            ${this.props.price}
          </div>
        <div className='col-md-2 qty'>
          <input type='number' name='quantity' min={0} max={50} value={this.state.quantity} onChange={this.onChange} />
        </div>
        <div className='col-md-2 subtotal'>
            ${this.state.subtotal}
          </div>
        <div className='col-md-2 delete'>
          <button type='button' className='btn btn-danger' onClick={this.onDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default ProductRow
