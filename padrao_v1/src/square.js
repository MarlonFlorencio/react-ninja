'use strict'

import React from 'react'

const Square = ({ children, color }) => (
    <div style= {{
        backgroundColor : color,
        height : '100px',
        width : '100px'
    }}
    > {children} </div>
)

Square.defaultProps = {
    color: 'red'
}

export default Square
