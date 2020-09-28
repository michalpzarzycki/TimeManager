import React from 'react'
import {shallow} from 'enzyme'
import TaskDeadline from './TaskDeadline'

test('Expext to render TaskDeadline component', () => {
    expect(shallow(<TaskDeadline task={{}}/>)).toMatchSnapshot()
})
