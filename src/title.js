'use strict'

import React from 'react'

const Title = ({ name, lastName }) => (
    <h1>Olá {`${name} ${lastName}`}  </h1>
)

Title.defaultProps = {
    name: 'SemNome',
    lastName: 'SemSobreNome'
}

/*
const Title = React.createClass({

    getDefaultProps: function () {
        return {
            name: 'SemNome',
            lastName: 'SemSobreNome'
        }
    },

    render: function () {
        return <h1>Olá {this.props.name + ' ' + 
        this.props.lastName.first + this.props.lastName.last}</h1>
    }
})
*/




export default Title
