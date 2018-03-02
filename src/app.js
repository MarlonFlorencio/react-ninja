'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: 'Valor Inicial',
            sel:'2',
            checked: false
        }
    }

    render() {
        console.log('render app')
        return (
            <div>
                <form 
                
                    onSubmit= { (e) => { 
                        e.preventDefault()
                        console.log('submiit')
                    }}

                    onChange= { (e) => { 
                        e.preventDefault()
                        console.log('onchange - name ', e.target.name, ' value ', e.target.value)
                    }}

                    >

                    <input type="text" value={this.state.value} 
                        onChange={ (e) => { this.setState({ value: e.target.value}) }} />

                    <br /><br />

                    <label>
                        <input  type="checkbox" value='my-checkbox' checked={this.state.checked} 
                            onChange={(e) => {this.setState({checked: e.target.checked})}} /> Checkbox                        
                    </label>

                    <br /><br />

                    <input type="radio" name="rd" value="1" defaultChecked /> Radio 1
                    <input type="radio" name="rd" value="2" /> Radio 2

                    <br /><br />

                    <select value={this.state.sel}
                        onChange={(e) => {this.setState({sel: e.target.value})}}>
                        <option value="1">Opção 1</option>
                        <option value="2" >Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>

                    <br /><br />

                    <textarea defaultValue={'linha 1\nLinha 2'} />

                    <br /><br />

                    <button type="submit">Enviar</button>

                </form>
            </div>
        )
    }
}

export default App
