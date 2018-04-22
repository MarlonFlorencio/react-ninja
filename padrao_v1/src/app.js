'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {

    constructor() {
        super();
        this.state = {
            checked: false,
            showContent: false
        }
    }

    render() {
        console.log('render app')
        return (
            <div>
                <form> 

                    <label>
                        <input  type="checkbox" checked={this.state.checked} 
                            onChange={(e) => {this.setState({checked: !this.state.checked}, () => {
                                this.setState({showContent: this.state.checked})
                            })}} /> Mostrar                        
                    </label>

                    <br /><br />

                    {this.state.showContent && <div>Olha ae</div>}

                </form>
            </div>
        )
    }
}

export default App
