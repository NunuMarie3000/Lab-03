import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>Storm O'Bryant<br></br>&copy;StormyWeatherCreations, {this.props.year}<br></br>Check out my work on <a href='https://github.com/NunuMarie3000?tab=repositories' target={'_blank'} rel="noreferrer">Github</a>!</footer>
    )
  }
}