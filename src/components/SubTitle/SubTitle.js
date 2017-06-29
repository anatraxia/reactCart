import React, { Component } from 'react'

export class SubTitle extends Component {
  render () {
    return (
      <h2 className='heading'>{this.props.title}</h2>
    )
  }
}

export default SubTitle
