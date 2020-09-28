import React from 'react'
import {shallow} from 'enzyme'
import TaskImportance from './TaskImportace'

test('Expext to render TaskImportance component', () => {
    expect(shallow(<TaskImportance task={{}}/>)).toMatchSnapshot()
})
