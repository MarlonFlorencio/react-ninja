'use strict'

const reduce = (arr, func = (prev, curr) => prev + curr, initialValue ) => {
   
    let acc = initialValue
    let arrCopy = arr

    if (initialValue === undefined) {
        acc = arr[0]
        arrCopy = arr.slice(1)
    }

    for(let i = 0; i < arrCopy.length; i++) {
        acc = func(acc, arrCopy[i], i, arr)
    }
    
    return acc
}

export default reduce