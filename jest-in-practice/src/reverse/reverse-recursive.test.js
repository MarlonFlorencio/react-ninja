'use strict'

import { expect } from 'chai'
import reverse from './reverse-recursive'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it ('reverse() should return []', () => {
    expect( reverse() ).to.be.deep.equal([])
})

it ('reverse([]) should return []', () => {
    expect( reverse([]) ).to.be.deep.equal([])
})

it ('reverse([1]) should return [1]', () => {
    expect( reverse([1]) ).to.be.deep.equal([1])
})

it ('reverse([1,2,3,4]) should return [4,3,2,1]', () => {
    expect( reverse([1,2,3,4]) ).to.be.deep.equal([4,3,2,1])
})

it ('reverse([-1,0,1]) should return [1,0,-1]', () => {
    expect( reverse([-1,0,1]) ).to.be.deep.equal([1,0,-1])
})
