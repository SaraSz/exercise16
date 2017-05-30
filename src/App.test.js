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
  const greeting = <input placeholder="Name"/>;
  expect(wrapper.contains(greeting)).toBe(true)
                        
});

test("Test email input", () => {
  let wrapper = shallow(<App/>);
  const greeting = <input placeholder="Email"/>;
  expect(wrapper.contains(greeting)).toBe(true)
                        
});

test("Test nameinput state", () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.state("nameValue")).toBe("")
                        
});

test("Test emailinput state", () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.state("emailValue")).toBe("")
                        
});



