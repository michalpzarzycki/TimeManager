import React from 'react'
import {shallow} from 'enzyme'
import TaskCheckBox from './TaskCheckBox'

test('Expext to render TaskCheckBox component', () => {
    expect(shallow(<TaskCheckBox task={{}} handleChecked={() => {}}/>)).toMatchSnapshot()
})
