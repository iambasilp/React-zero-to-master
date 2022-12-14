import React, { Component } from 'react'
import './Button.css'
export default class Button extends Component {
  render() {
    const {isActive,ButtonClicked} = this.props
    return (
      <div className='card__button'>
        <a href='#' onClick={ButtonClicked} >{isActive ? "Active" : "Non Active"}</a>
      </div>
    )
  }
}
