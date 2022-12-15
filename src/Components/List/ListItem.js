import React, { Component } from 'react'
import Button from './Button'
import './ListItem.css'
export default class ListItem extends Component {
    render() {
        // props acessing in class Componet this.props
        const {title,desc,isActive, ButtonClicked,handleDelete} = this.props // destructring object
        return (
            <div className='listitem'>
                <div className="card__container">
                    <div className="card" style={isActive ? {backgroundColor:"green"} : {backgroundColor:"red"}}>
                        <h1 className='card__title'>{title}</h1>
                        <p className='card__description'>{desc}</p>
                        <Button ButtonClicked={ButtonClicked} isActive={isActive}/>
                        <button className='card__delete' onClick={handleDelete}>Delete</button>
                    </div>
                   
                </div>
            </div>
        )
    }
}

