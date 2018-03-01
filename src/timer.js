'use strict'

import React, { Component } from 'react'

class Timer extends Component {

    constructor() {
        super();
        this.state = {
            time: 0
        }

        this.timer
    }

    componentDidMount() {
        this.timer = setInterval ( () => {
            this.setState({
                time: this.state.time + 1
            })
        } ,1000) 
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps timer ' , this.props, nextProps)

        this.setState({
            time: this.state.time + nextProps.time
        })

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate timer ' , this.props, nextProps)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidUpdate(prevProps, prevState) {
         console.log('componentDidUpdate timer ', this.props, prevProps )
    }

    shouldComponentUpdate(nextProps, nextState) {
       // console.log('shouldComponentUpdate', this.state, nextState)
        return this.state.time !== nextState.time
    }

    render() {
        console.log('render time')
        return (
            <div>Timer: {this.state.time}</div>
        )
    }
}

export default Timer
