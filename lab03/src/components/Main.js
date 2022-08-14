import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

import HornedBeast from './HornedBeast'
//i need all of the beasts...
//what is the search gonna be by? lets say # of horns
//i need input 
//i need this class to have access to all horned beasts, so data.json? or...
//actually, maybe i'll do all this in main, since that's where i'm mapping through json to render each beast card

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      //how do i have access to all beast information to set in state, if i have all beast information, then i can just map through all the info and render the beast
      //maybe the state just needs to have an array of object info, which is what data.json is, right?
      //yes it is, so...allBeasts = this.props.jsonData, since it's passed down from app.js
      searchedBeasts: this.props.jsonData,
    }
  }

  handleChange = (e) => {
    //when the input is update, i want to check how many horns the user inputed, which will be selectedHorns
    //then i want to filter through allBeasts, and for each beast, if beast.horns === selectedHorns, create a <HornedBeast/> with the info plugged in
    const selectedHorns = e.target.value;
    console.log(selectedHorns);
    let updatedSearchedBeast;
    if(selectedHorns === '1'){
      updatedSearchedBeast = this.props.jsonData.filter(beast => beast.horns === 1);
      this.setState({searchedBeasts: updatedSearchedBeast});
    }else if(selectedHorns === '2'){
      updatedSearchedBeast = this.props.jsonData.filter(beast => beast.horns === 2);
      this.setState({searchedBeasts: updatedSearchedBeast})
    }else if(selectedHorns === '3'){
      updatedSearchedBeast = this.props.jsonData.filter(beast => beast.horns === 3);
      this.setState({searchedBeasts: updatedSearchedBeast})
    }else if(selectedHorns === '100'){
      updatedSearchedBeast = this.props.jsonData.filter(beast => beast.horns === 100);
      this.setState({searchedBeasts: updatedSearchedBeast})
    }else if(selectedHorns === 'all'){
      updatedSearchedBeast = this.props.jsonData
      this.setState({searchedBeasts: updatedSearchedBeast})
    }
  }

  render() {

    // allBeasts = this.props.jsonData.map(obj=>{return <HornedBeast updateState={this.props.updateState} imageUrl={this.props.imageUrl} image_url={obj.image_url} title={obj.title} description={obj.description} horns={obj.horns}></HornedBeast>})
    return (
      <>
      <Form className='horn-form'>
        <Form.Label>How many horns does your favorite beast have?
            <Form.Select onChange={this.handleChange}>
                <option value='all'>Show all Beasts</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
            </Form.Select>
        </Form.Label>
      </Form>



      <div className='horned-beast-cards'>
        {this.state.searchedBeasts.map(beast =>
          <HornedBeast updateState={this.props.updateState} image_url={beast.image_url} title={beast.title} description={beast.description} horns={beast.horns}/>
        )}
      </div>
      </>
    )
  }
}