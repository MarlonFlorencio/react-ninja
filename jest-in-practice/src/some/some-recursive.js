'use strict'

const some = (arr = [], func = (item) => item) => {
    
    return ( function someInternal(arrarInternal, counter) {
      const [head, ...tail] = arrarInternal

      return arrarInternal.length === 0 
      ? false 
      : func(head, counter, arr) 
        ? true 
        : someInternal(tail, counter + 1)
    })(arr, 0) 
}

export default some