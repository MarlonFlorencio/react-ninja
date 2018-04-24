'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Title from './index'

const stories = storiesOf('Title', module)

stories.add('component', () => (
  <Title title='Test' />
))
