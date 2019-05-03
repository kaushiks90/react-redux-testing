import React from "react";
// import toJson from 'enzyme-to-json'
import {
  shallow
} from "enzyme";
import {
  findByTestAttr
} from "../../utils/index";
import Form from "./index";
import api from "./api";

const setup = (props = {}) => {
    const component = shallow( < Form {
        ...props
      }
      />);
      return component;
    };

    describe("Form Component", () => {
      let component;
      beforeEach(() => {
        component = setup();
      });
      it("should have the checkbox checked", () => {
        let wrapper = findByTestAttr(component, "checked");
        expect(wrapper.props().checked).toBe(true);
      });
      it("should allow user to input in the form", () => {
        const wrapper = shallow( < Form / > );
        wrapper
          .find(`[data-test='${"name"}']`)
          .simulate("change", {
            target: {
              name: "name",
              value: "cats"
            }
          });

        expect(wrapper.state("name")).toEqual("cats");
      });
      it("submits the form", () => {
        jest
          .spyOn(api, "addUser")
          .mockImplementation(() => Promise.resolve({
            data: "New User Added"
          }));
        const wrapper = shallow( < Form / > );
        wrapper
          .find(`[data-test='${"name"}']`)
          .simulate("change", {
            target: {
              name: "name",
              value: "cats"
            }
          });
        wrapper.find(`[data-test='${"email"}']`).simulate("change", {
          target: {
            name: "email",
            value: "fdgd@gmiail.com"
          }
        });
        wrapper
          .find(`[data-test='${"number"}']`)
          .simulate("change", {
            target: {
              name: "number",
              value: "546456456"
            }
          });
        wrapper
          .find(`[data-test='${"addUserForm"}']`)
          .simulate("submit", {
            preventDefault: () => {}
          });

        expect(api.addUser).toHaveBeenCalledWith(
          "cats",
          "fdgd@gmiail.com",
          "546456456"
        );
      });

      it('matches saved snapshot', () => {
        const wrapper = shallow( < Form / > )
        expect(wrapper).toMatchSnapshot()
      })
    });