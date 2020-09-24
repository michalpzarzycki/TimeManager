import React from 'react'
import {shallow} from 'enzyme'
import SearchInput from './SearchInput'
import {Provider} from 'react-redux'
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

test('Expext to render SearchInput component', () => {
    expect(shallow(<Provider store={store}><SearchInput/></Provider>)).toMatchSnapshot()
})