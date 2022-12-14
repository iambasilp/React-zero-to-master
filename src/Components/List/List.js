import React, { Component } from 'react'
import Tools from '../Tools'
import ListItem from './ListItem'
import './List.css'

const data = [

    {
        title: "Title One",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores odit illo enim accusamus minima suscipit at, maiores minus aliquid quis obcaecati consequatur doloremque perspiciatis officiis cupiditate. Debitis, voluptates ipsam!",
        isActive: true,
    },
    {
        title: "Title Two",
        desc: "Donec sed nulla quis ante tempor blandit. Integer hendrerit dolor eget hendrerit tempor. Suspendisse potenti. Vestibulum ac dolor lorem. Aliquam vitae arcu ut mauris vulputate venenatis. Morbi ut lectus mollis diam consequat tristique",
        isActive: false,
    },
    {
        title: "Title Three",
        desc: "Aliquam ut odio sed leo accumsan semper. Sed tincidunt et orci et cursus. Suspendisse dapibus arcu arcu, vitae tincidunt dolor laoreet a. Sed ullamcorper condimentum nibh, vitae egestas lacus. Fusce posuere justo eget ultrices rhoncus",
        isActive: true,
    },
    {
        title: "Title Four",
        desc: "Phasellus eu euismod arcu. Morbi eget sollicitudin leo. Aenean ac justo sed mauris rhoncus sollicitudin hendrerit eu ligula. Vivamus luctus commodo pulvinar. Sed iaculis vel odio nec lacinia. Mauris risus lect",
        isActive: false,
    },
    {
        title: "Title Five",
        desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus a bibendum urna. Nullam sed ultricies odio. Sed vitae sem eget enim luctus pretium non quis diam. Vestibulum arcu risus, maximus eget orci at, efficitur molestie neque",
        isActive: true,
    },
    {
        title: "Title Six",
        desc: "Maecenas porttitor metus ut diam pretium, ac egestas nibh feugiat. Pellentesque sed sollicitudin leo. Mauris libero mi, pharetra sit amet hendrerit maximus, egestas ac risus. Pellentesque suscipit interdum suscipit",
        isActive: false,
    },
]
export default class List extends Component {
    render() {
        return (
            <Tools>
                <div className='list'>
                    {data.map((obj) => {
                        return <ListItem title={obj.title} desc={obj.desc} isActive={obj.isActive} />
                    })}
                </div>
            </Tools>

        )
    }
}
