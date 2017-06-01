import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import { mount } from 'enzyme';
import Button from './button';
import MyForm from "./MyForm.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("Test input-element", () => {
  let wrapper = shallow(<MyForm/>);
  const greeting = <input placeholder="Name"/>;
  expect(wrapper.find(".nameValue").length).toBe(1)
                        
});

test("Test email input", () => {
  let wrapper = shallow(<MyForm/>);
  const greeting = <input placeholder="Email"/>;
  expect(wrapper.find(".emailValue").length).toBe(1)
                        
});

test("Test nameinput state", () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.state("nameValue")).toBe("")
                        
});

test("Test emailinput state", () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.state("emailValue")).toBe("")
                        
});

test("Nameinput state change", () => {
  let wrapper = mount(<App />);
  wrapper.find(".nameValue").simulate("change", {
    target: {
      value: "Sara"
    }
  });
  expect(wrapper.state("nameValue")).toBe("Sara")
                        
});

test("Emailinput state change", () => {
  let wrapper = mount(<App/>);
  wrapper.find(".emailValue").simulate("change", {
    target: {
      value: "me@me.com"
    }
  });
  expect(wrapper.state("emailValue")).toBe("me@me.com")
                        
});

test("Test button", () => {
    let wrapper = shallow(<Button />);
    let actual = wrapper.find("button").hasClass("buttonClass");
    let expected = true;
    expect(actual).toBe(expected);
});



