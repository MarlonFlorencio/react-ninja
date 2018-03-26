'use strict'

const every = (arr = [], func = (item) => item) => {
    
    return ( function everyInternal(arrarInternal, counter) {
      const [head, ...tail] = arrarInternal

      return arrarInternal.length === 0 
      ? true 
      : !func(head, counter, arr) 
        ? false 
        : everyInternal(tail, counter + 1)
    })(arr, 0) 
}

export default every