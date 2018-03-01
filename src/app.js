'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {

    constructor() {
        super();
        this.state = {
            time: 10
        }
    }

    componentWillMount () {
        console.log('componentWillMount app')
    }

    render() {
        console.log('render app')
        return (
            <div>
                <Button handleClick="sdad" >Clique</Button>
            </div>
        )
    }
}

export default App
