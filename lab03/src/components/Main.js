import React, { Component } from 'react'

import HornedBeast from './HornedBeast'


export default class Main extends Component {
  render() {
    return (
      <div className='horned-beast-cards'>
        {this.props.jsonData.map(obj=>{return <HornedBeast updateState={this.props.updateState} imageUrl={this.props.imageUrl} image_url={obj.image_url} title={obj.title} description={obj.description}></HornedBeast>})}
      </div>
    )
  }
}