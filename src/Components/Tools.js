import React, { Component } from 'react'
import './Tools.css'
export default class Tools extends Component {
  render() {
    const {children,handleisActive} = this.props
    const onlyChildren = React.Children.only(children)
    const count = React.Children.count(onlyChildren.props.children)
    return (
      <div className='tools'>
        <div className="tools__box">
            
           <select name="status" onChange={handleisActive} >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="non-active">Non Active</option>
           </select>
           <span>Total <b>{count}</b> nos</span>
        </div>
        {children}
      </div>
    )
  }
}
