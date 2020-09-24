import React from 'react'
import {shallow} from 'enzyme'
import SidebarButton from './SidebarButton';


test('Expext to render SidebarButton component', () => {
    expect(shallow(<SidebarButton />)).toMatchSnapshot()
})