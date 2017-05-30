import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("Test input-element", () => {
  let wrapper = shallow(<App/>);
  const greeting = <input placeholder="name"/>;
  expect(wrapper.contains(greeting)).toBe(true)
                        
});

