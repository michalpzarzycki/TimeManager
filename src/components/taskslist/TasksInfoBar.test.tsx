import React from 'react'
import {shallow} from 'enzyme'
import TaskInfoBar from './TasksInfoBar'
import {Provider} from 'react-redux'
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
test('Expext to render TaskInfoBar component', () => {
    expect(shallow(<Provider store={store}><TaskInfoBar /></Provider>)).toMatchSnapshot()
})