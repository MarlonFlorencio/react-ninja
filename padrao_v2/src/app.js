'use strict'

import React, { Component } from 'react'
import Title from 'components/title'
import { resolve } from 'url';

class App extends Component {
  constructor () {
    super()
    this.state = {title: '...'}
  }

  getTitle () {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
      
    })
  }

  async componentDidMount () {
    this.setState({ title: await this.getTitle() })
  }

  render () {
    return (
      <Title>{this.state.title}</Title>
    )
  }
}

export default App
