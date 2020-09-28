import React from 'react'
import {shallow} from 'enzyme'
import TaskDone from './TaskDone'

test('Expext to render TaskDone component', () => {
    expect(shallow(<TaskDone task={{}} setDoneTask={{}} setUncompletedTask={{}}/>)).toMatchSnapshot()
})
