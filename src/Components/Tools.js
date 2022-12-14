import React, { Component } from 'react'
import './Tools.css'
import AddNew from './AddNew'
export default class Tools extends Component {
  render() {
    const {children,handleisActive,count,ButtonValue,onAdd} = this.props
    // const onlyChildren = React.Children.only(children)
    // const count = React.Children.count(onlyChildren.props.children)
    return (
      <div className='tools'>
        <div className="tools__box">
           <select name="status" value={ButtonValue} onChange={handleisActive} >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="non-active">Non Active</option>
           </select>
           <span>Total <b>{count}</b> nos</span>
        </div>
        <div className="tools__box2">
           <AddNew onAdd={onAdd}/>
        </div>
        {children}
      </div>
    )
  }
}
