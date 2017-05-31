import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import Button from './button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("Test input-element", () => {
  let wrapper = shallow(<App/>);
  const greeting = <input placeholder="Name"/>;
  expect(wrapper.find(".nameInput").length).toBe(1)
                        
});

test("Test email input", () => {
  let wrapper = shallow(<App/>);
  const greeting = <input placeholder="Email"/>;
  expect(wrapper.find(".emailInput").length).toBe(1)
                        
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
  let wrapper = shallow(<App />);
  wrapper.find(".nameInput").simulate("change", {
    target: {
      value: "Sara"
    }
  });
  expect(wrapper.state("nameValue")).toBe("Sara")
                        
});

test("Emailinput state change", () => {
  let wrapper = shallow(<App/>);
  wrapper.find(".emailInput").simulate("change", {
    target: {
      value: "me@me.com"
    }
  });
  expect(wrapper.state("emailValue")).toBe("me@me.com")
                        
});

test("Test button", () => {
    let wrapper = shallow(<Button />);
    let actual = wrapper.find("button").hasClass("clearButton");
    let expected = true;
    expect(actual).toBe(expected);
});



