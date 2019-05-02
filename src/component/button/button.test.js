import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../utils/index";
import SharedButton from "./index";

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props}> </SharedButton>);
  return component;
};

describe("SharedButton Component", () => {
  describe("checking propTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders Component", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button text",
        emitEvent: () => {}
      };
      wrapper = setUp(props);
    });
    it("Should render a Button component", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
