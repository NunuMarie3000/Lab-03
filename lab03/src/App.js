import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast'
import Footer from './components/Footer'

import jsonData from './components/data.json'
import './index.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      beast:[
        {
          title: '',
          description: '',
          image: '',
          horns: ''
        }
      ],
      isSelected: false,
    }
  }

  updateState = (beast) =>{
    const newState = {title: beast.title, description: beast.description, image: beast.image, horns: beast.horns}
    this.setState({beast: [newState], isSelected: true})
  }

  changeIsSelected = () =>{
    this.setState({isSelected: false})
  }
  
  render() {
    return (
      <>
      <Header/>
      <div className='app-container'>
        <Main jsonData={jsonData} updateState={this.updateState}/>
      </div>
      {<SelectedBeast beastState={this.state.beast} isSelected={this.state.isSelected} changeIsSelected={this.changeIsSelected}/>}
      <Footer/>
      </>
    )
  }
}

