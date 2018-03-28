'use strict'

const find = (arr = [], func = (item) => item) => {
    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) ) {
            return (arr[i])
        }
    }
}

export default find