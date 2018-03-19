'use strict'

import {expect} from 'chai'
import sum from './sum'

it('sum should be a function', () => {
    expect(sum).to.be.a('function')
})

it('sum should return 5', () => {
    expect(sum(1,4)).to.be.equal(5)
})

it('sum should return 10', () => {
    expect(sum(10,0)).to.be.equal(10)
})