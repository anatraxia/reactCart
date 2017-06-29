import React, { Component } from 'react'
import './GrandTotal.css'

export class GrandTotal extends Component {
  render () {
    return(
      <section className="row total">
        <h1>Total: <br/> $<span id="grandTotal">{this.props.grandtotal}</span></h1>
      </section>
    )
  }
}

export default GrandTotal;
