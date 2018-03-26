'use strict'

import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it ('some() should return false', () => {
    expect( some()).to.not.be.ok
})

it ('some([], (item) => item) should return false', () => {
    expect( some([], (item) => item) ).to.not.be.ok
})

it ('some([1,2,3], (item) => item % 2 === 0) should return true', () => {
    expect( some([1,2,3], (item) => item % 2 === 0) ).to.be.ok
})

it ('some([1,3,5], (item) => item % 2 === 0) should return false', () => {
    expect( some([1,3,5], (item) => item % 2 === 0) ).to.not.be.ok
})

it ('some([-1,0,1], (item) => item) should return true', () => {
    expect( some([-1,0,1], (item) => item) ).to.be.ok
})

it ('some([1]) should return true', () => {
    expect( some([1])).to.be.ok
})

it ('some([0]) should return false', () => {
    expect( some([0])).to.not.be.ok
})

it ('some([0,1,2], (item) => item > 3) should return false', () => {
    expect( some([0,1,2], (item) => item > 3) ).to.not.be.ok
})

it ('some([1,2,3], (item) => item) should return true', () => {
    expect( some([1,2,3], (item) => item) ).to.be.ok
})

it ('some([1,2,3], (item, index) => index === item - 1) should return true', () => {
    expect( some([1,2,3], (item, index) => index === item - 1) ).to.be.ok
})

it ('some([1,2,3], (item, index, array) => array.length === 3) should return true', () => {
    expect( some([1,2,3], (item, index, array) => array.length === 3) ).to.be.ok
})