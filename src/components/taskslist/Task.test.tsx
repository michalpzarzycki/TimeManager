import React from 'react'
import {shallow} from 'enzyme'
import {Provider} from 'react-redux'
import configureMockStore from "redux-mock-store";
import Task from './Task';
const mockStore = configureMockStore();
const store = mockStore({});

test('Expext to render TASK component', () => {
    expect(shallow(<Provider store={store}><Task /></Provider>)).toMatchSnapshot()
})