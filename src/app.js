'use strict'

import React, { Component} from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'


class App extends Component {
    render () {
        return ( 
            <div className='container' >
                <Title name="Marlon" lastName="Florencio"  />

                <LikeButton />    
                

            </div>
            
        )
    }
}

export default App
