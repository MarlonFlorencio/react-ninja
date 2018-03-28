'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursive'
import reduceRight from './reduce-right-recursive'

it('reduce should ba a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([1,2,3], (acc, item) => acc + item, 0) should be 6', () => {
    const before = reduce([1,2,3], (acc, item) => acc + item, 0)
    const after = 6
    expect(before).to.be.equal(after)
}) 

it('reduce([2,3,4], (acc, item) => acc + item, 0) should be 9', () => {
    const before = reduce([2,3,4], (acc, item) => acc + item, 0)
    const after = 9
    expect(before).to.be.equal(after)
}) 

it('reduce([2,3,4], (acc, item) => acc + item) should be 9', () => {
    const before = reduce([2,3,4], (acc, item) => acc + item)
    const after = 9
    expect(before).to.be.equal(after)
}) 

it('reduce([2,3,4]) should be 9', () => {
    const before = reduce([2,3,4])
    const after = 9
    expect(before).to.be.equal(after)
}) 

it('reduce([1,2], (acc, item, index) => acc + index, 0) should be 1', () => {
    const before = reduce([1,2], (acc, item, index) => acc + index, 0)
    const after = 1
    expect(before).to.be.equal(after)
}) 

it('reduce([1,2], (acc, item) => {acc["number-" + item] = item; return acc}, {})  should be {"number-1":1, "number-2":2}', () => {
    const before = reduce([1,2], (acc, item) => { 
        acc["number-" + item] = item; 
        return acc
    }, {})
    const after = {"number-1":1, "number-2":2}
    expect(before).to.be.deep.equal(after)
}) 

it('reduce([1,2], (acc, item, index, array) => acc + array[index], 0) should be 3', () => {
    const before = reduce([1,2], (acc, item, index, array) => acc + array[index], 0)
    const after = 3
    expect(before).to.be.equal(after)
}) 

it('reduceRight([lon, Mar], (acc, item) => acc + item, "") should be Marlon', () => {
    const before = reduceRight(['lon', 'Mar'], (acc, item) => acc + item, '')
    const after = 'Marlon'
    expect(before).to.be.equal(after)
}) 