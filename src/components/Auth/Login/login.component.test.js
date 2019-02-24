import Login from "./Login";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { MagicSpinner } from "react-spinners-kit";
import { Status } from "../AuthStyles";

Enzyme.configure({ adapter: new Adapter() });

describe("<Login />", () => {
  const props = {
    handleUsername: jest.fn(),
    handlePassword: jest.fn(),
    handleLogin: jest.fn(),
    linkSignup: jest.fn(),
    isLoading: false,
    username: "username",
    password: "password",
    status: "status"
  };

  // shallow rendering
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login {...props} />);
  });

  it("should render without errors", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // Full DOM rendering
  let component;
  beforeEach(() => {
    component = mount(<Login {...props} />);
  });

  it("should render button correctly", () => {
    const button = component.find("button");
    expect(button.text()).toBe("Login");
    props.isLoading = true;
    expect(button.find(MagicSpinner)).toBeTruthy();
  });

  it("should handle username input change", () => {
    const input = component
      .find("input")
      .filterWhere(el => el.prop("name") === "username");
    expect(input.prop("placeholder")).toBe("Username");
    expect(input.prop("type")).toBe("text");
    input.simulate("change");
    expect(component.props().handleUsername).toHaveBeenCalled();
  });

  it("should handle password input change", () => {
    const input = component
      .find("input")
      .filterWhere(el => el.prop("name") === "password");
    expect(input.prop("placeholder")).toBe("Password");
    expect(input.prop("type")).toBe("password");
    input.simulate("change");
    expect(component.props().handlePassword).toHaveBeenCalled();
  });

  it("should call fn when form is submitted", () => {
    const form = component.find("form");
    form.simulate("submit");
    expect(props.handleLogin).toHaveBeenCalled();
  });

  it("should render link", () => {
    expect(component.find("a")).toBeTruthy();
  });

  it("should update status", () => {
    const status = component.find(Status);
    expect(status.text()).toBe("status");
    component.setProps({ status: "test" });
    expect(status.text()).toBe("test");
  });
});
