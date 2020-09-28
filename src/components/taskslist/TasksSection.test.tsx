import React from 'react'
import {shallow} from 'enzyme'
import TasksSection from './TasksSection'

test('Expext to render TasksSection component', () => {
    expect(shallow(<TasksSection taskList={{}} handleDeletePopup={()=>{}} isAllChecked={{}} handleDetailsPopup={()=>{}}/>)).toMatchSnapshot()
})