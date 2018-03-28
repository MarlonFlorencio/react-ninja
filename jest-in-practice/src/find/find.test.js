'use strict'

import { expect } from 'chai'
import find from './find'

it('find should be a function', () => {
    expect(find).to.be.a('function')
})

it ('find([]) should return []', () => {
    expect( find([]) ).to.be.equal(undefined)
})

it ('find() should return []', () => {
    expect( find() ).to.be.equal(undefined)
})

it ('find([1,2,3]) should return 1', () => {
    expect( find([1,2,3])).to.be.equal(1)
})

it ('find([2,3,4], (item) => item === 3) should return 3', () => {
    expect( find([2,3,4], (item) => item === 3 ) ).to.be.equal(3)
})

it ('find([2,3,4], (item) => item === 5) should return undefined', () => {
    expect( find([2,3,4], (item) => item === 5 ) ).to.be.equal(undefined)
})

it ('find([0,1,2], (item) => item) should return 1', () => {
    expect( find([0,1,2], (item) => item) ).to.be.equal(1)
})

it ('find([1,2,3,4], (item) => item > 2) should return 3', () => {
    expect( find([1,2,3,4], (item) => item > 2) ).to.be.equal(3)
})

it ('find([1,2,3,5], (item, index) =>  index  === 3) should return 5', () => {
    expect( find([1,2,3,5], (item, index) => index === 3) ).to.be.equal(5)
})

it ('find([3,2,1,5], (item, index,array) => index === array.indexOf(item) ) should return 3', () => {
    expect( find([3,2,1,5], (item, index,array) => index === array.indexOf(item) ) ).to.be.equal(3)
})