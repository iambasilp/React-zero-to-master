import React, { Component } from 'react'

export default class Tools extends Component {
  render() {
    const {children} = this.props
    return (
      <div className='tools'>
        {children}
      </div>
    )
  }
}
