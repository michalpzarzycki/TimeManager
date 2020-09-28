import React from 'react'
import {shallow} from 'enzyme'
import TaskLoader from './TaskLoader'

test('Expext to render TaskLoader component', () => {
    expect(shallow(<TaskLoader />)).toMatchSnapshot()
})
