'use strict'

import React from 'react'

const Title = React.createClass({

    getDefaultProps: function () {
        return {
            name: 'Jurubeba',
            lastName : {
                first: 'Ticiano',
                last: 'Reinaldo' 
            }
        }
    },

    render: function () {
        return <h1>Olá {this.props.name + ' ' + 
        this.props.lastName.first + this.props.lastName.last}</h1>
    }
})

export default Title
