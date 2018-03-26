'use strict'

const every = (arr = [], func = (item) => item) => {

    for(let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr) ) {
            return false
        }
    }
    
    return true
}

export default every