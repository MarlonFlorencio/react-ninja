'use strict'

console.log('Teste com arrow functions')

var sum = (x,y) => x + y

var add1 = x => sum(x, 1)


console.log(add1(4))