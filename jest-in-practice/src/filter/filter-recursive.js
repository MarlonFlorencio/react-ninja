'use strict'

const map = (arr = [], func = (item) => item) => {
    
    let counter = 0;

    const mapInternal = (arrayInternal) => {
        const [head, ...tail] = arrayInternal
        return arrayInternal.length === 0 ? false : [
             func(head, counter++, arr) ? head : null  , ...mapInternal(tail, func) 
        ]
    }

    return mapInternal(arr)
}

export default map