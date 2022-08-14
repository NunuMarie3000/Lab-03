import React, { Component } from 'react'

export default class Header extends Component {
    clickTitle(e){
        e.currentTarget.classList.toggle('clicked');
    }

    render() {
    return (
    <div onClick={this.clickTitle} className='title'>
        <h1>Horned Beasts <i class="fa-solid fa-hand-sparkles"></i></h1>
        <p className='subheader'><i class="fa-solid fa-heart"></i> And where to like them</p>
        <p>We have a large assortment of miscellaneous horned beasts. Feel free to show some love(or some hate, who are we to judge)</p>
    </div>
    )
    }
}