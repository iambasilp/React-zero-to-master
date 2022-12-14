import React, { Component } from 'react'
import './AddNew.css'
import randomColor from 'randomcolor'
export default class AddNew extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            color:"black",
            titleInput:"",
            descInput:"",
            isActive:false,
        }
    }
    handletitle = (event)=>{
        this.setState({
            titleInput:event.target.value,
            color:randomColor()
        })
    }
    handledesc = (event)=>{
        this.setState({
            descInput:event.target.value,
            color:randomColor()
        })
    }
    handleisActive = (event)=>{
        this.setState({
            isActive:event.target.checked,
            color:randomColor()
        })
    }
    handleClick = ()=>{
        console.log("hello");
        const {titleInput,descInput,isActive} = this.state
        if(titleInput){
            this.props.onAdd({
                title:titleInput,
                desc:descInput,
                isActive:isActive
            })
            this.setState({
                titleInput: '',
                descInput: '',
                isActive: false
            });
        }
    }
  render() {
    return (
      <div className='tools__box-second'>
        <input style={{border:`1px solid ${this.state.color}`}} type="text" className='title-input' placeholder='Enter Title here' onChange={this.handletitle} value={this.state.titleInput}/>
        <input cols="40" rows="2" style={{border:`1px solid ${this.state.color}`}} type="text" className='desc-input' placeholder='Enter Description here' onChange={this.handledesc} value={this.state.descInput}/>
        <input type="checkbox" style={{accentColor:this.state.color, width:"1.5rem"}}  checked={this.state.isActive} onChange={this.handleisActive}/>
        <input type="button"  className='button-input' style={{backgroundColor:this.state.color,color:"white"}} onClick={this.handleClick} value="Add new"/>
        
      </div>
    )
  }
}
