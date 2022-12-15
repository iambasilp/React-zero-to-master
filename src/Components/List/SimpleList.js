// controlled component
import React, { Component } from 'react'
import ListItem from './ListItem'
export default class SimpleList extends Component {
    render() {
        const { newArray, ButtonClicked, handleDelete } = this.props
        return (

            <div className='list'>
                {newArray.map((obj) => {
                    return <ListItem key={obj.title} ButtonClicked={ButtonClicked} title={obj.title} desc={obj.desc} isActive={obj.isActive} handleDelete={()=>{
                        handleDelete(obj)
                    }} />
                })}
            </div>

        )
    }
}
