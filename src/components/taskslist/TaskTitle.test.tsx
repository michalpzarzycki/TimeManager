import React from 'react'
import {shallow} from 'enzyme'
import TaskTitle from './TaskTitle'

test('Expext to render TaskTitle component', () => {
    expect(shallow(<TaskTitle task={{}}/>)).toMatchSnapshot()
})
