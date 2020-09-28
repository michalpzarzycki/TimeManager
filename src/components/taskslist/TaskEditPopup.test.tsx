import React from 'react'
import {shallow} from 'enzyme'
import TaskEditPopup from './TaskEditPopup'

test('Expext to render TaskEditPopup component', () => {
    expect(shallow(<TaskEditPopup />)).toMatchSnapshot()
})
