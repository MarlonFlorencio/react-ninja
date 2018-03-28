'use strict'

const find = (arr = [], func = (item) => item) => {
    
    return ( function findInternal(arrarInternal, counter) {
      const [head, ...tail] = arrarInternal
      return arrarInternal.length === 0 
      ? undefined 
      : (func(head, counter, arr) ? head : findInternal(tail, counter + 1))
    })(arr, 0) 
}

export default find