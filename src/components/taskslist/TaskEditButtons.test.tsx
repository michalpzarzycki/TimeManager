import React from 'react'
import {shallow} from 'enzyme'
import TaskEditButtons from './TaskEditButtons'

test('Expext to render TaskEditButtons component', () => {
    expect(shallow(<TaskEditButtons />)).toMatchSnapshot()
})
