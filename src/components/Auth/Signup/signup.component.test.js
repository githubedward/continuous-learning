import Signup from "./Signup";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { MagicSpinner } from "react-spinners-kit";
import { Status } from "../AuthStyles";

Enzyme.configure({ adapter: new Adapter() });

describe("<Signup />", () => {
  const props = {
    handleUsername: jest.fn(),
    handlePassword: jest.fn(),
    handleFullName: jest.fn(),
    handleSignup: jest.fn(),
    linkSignup: jest.fn(),
    isLoading: false,
    username: "username",
    password: "password",
    status: "status"
  };

  // shallow rendering
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup {...props} />);
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
    component = mount(<Signup {...props} />);
  });

  it("should render button correctly", () => {
    const button = component.find("button");
    expect(button.text()).toBe("Signup");
    props.isLoading = true;
    expect(button.find(MagicSpinner)).toBeTruthy();
  });

  it("should handle fullname input change", () => {
    const input = component
      .find("input")
      .filterWhere(el => el.prop("name") === "fullname");
    expect(input.prop("type")).toBe("text");
    expect(input.prop("placeholder")).toBe("Full Name");
    input.simulate("change");
    expect(component.props().handleFullName).toHaveBeenCalled();
  });

  it("should handle username input change", () => {
    const input = component
      .find("input")
      .filterWhere(el => el.prop("name") === "username");
    expect(input.prop("type")).toBe("text");
    expect(input.prop("placeholder")).toBe("Username");
    input.simulate("change");
    expect(component.props().handleUsername).toHaveBeenCalled();
  });

  it("should handle password input change", () => {
    const input = component
      .find("input")
      .filterWhere(el => el.prop("name") === "password");
    expect(input.prop("type")).toBe("password");
    expect(input.prop("placeholder")).toBe("Password");
    input.simulate("change");
    expect(component.props().handlePassword).toHaveBeenCalled();
  });

  it("should call fn when form is submitted", () => {
    const form = component.find("form");
    form.simulate("submit");
    expect(props.handleSignup).toHaveBeenCalled();
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
