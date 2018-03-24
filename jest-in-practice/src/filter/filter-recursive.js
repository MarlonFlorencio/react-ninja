'use strict'

const filter = (arr = [], func = (item) => item) => {
    
    return ( function filterInternal(arrarInternal, counter) {
      const [head, ...tail] = arrarInternal
      return arrarInternal.length === 0 
      ? [] 
      : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
    })(arr, 0) 
}

export default filter