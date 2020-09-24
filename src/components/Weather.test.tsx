import React from 'react'
import {shallow} from 'enzyme'
import Weather from './Weather'
import {Provider} from 'react-redux'
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

test('Expext to render Weather component', () => {
    expect(shallow(<Provider store={store}><Weather choosenLocation="Warszaw"/></Provider>)).toMatchSnapshot()
})