'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Title from './index'

it('Should Title to match snapshot', () => {
  const tree = renderer.create(<Title>Titulo</Title>).toJSON()
    expect(tree).toMatchSnapshot()
})
