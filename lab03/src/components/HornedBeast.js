import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class HornedBeast extends Component {
  constructor(props){
    super(props)
    this.state ={
      likes: 0,
    }
  }

  likeBeast(){
    this.setState((prev) =>({
      likes: prev.likes + 1
    }))
  }

  unlikeBeast(){
    this.setState((prev)=>({
      likes: prev.likes - 1
    }))
  }

  popEffect(e){
    e.currentTarget.classList.toggle('card-hover');
  }

  sendInfo = () =>{
    this.props.updateState({title: this.props.title, description: this.props.description, image: this.props.image_url})
  }

  render() {
    return (
        <div  className='individual-card-container'>
          <Card onClick={this.sendInfo}>
        <Card.Header><div><i class='fa-solid fa-heart'></i> {this.state.likes} Favorites</div></Card.Header>
        <Card.Img className='card-img' variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='button-container'>
          <Button onClick={()=>this.likeBeast()} variant="primary"><i class="fa-solid fa-thumbs-up"></i></Button>
          <Button onClick={()=>this.unlikeBeast()} variant="primary"><i class="fa-solid fa-thumbs-down"></i></Button>
          </div>
        </Card.Footer>
      </Card>
        </div>
    )
  }
}