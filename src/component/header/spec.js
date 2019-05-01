import React from "react";
import {
    shallow
} from "enzyme";
import {
    findByTestAttr
} from "./../../utils/index";
import Header from "./index";
import {
    isTSAnyKeyword,
    exportAllDeclaration
} from "@babel/types";

const setUp = (props = {}) => {
        const component = shallow( < Header {
                ...props
            }
            />);
            return component;
        }

        describe('Header component', () => {
            let component;
            beforeEach(() => {
                component = setUp()
            })
            it('should render without errors', () => {
                const wrapper = findByTestAttr(component, 'headerComponent');
                expect(wrapper.length).toBe(1);
            });
            it('should render a logo', () => {
                const wrapper = findByTestAttr(component, 'logoImg');
                console.log(wrapper);
                expect(wrapper.length).toBe(1);
            });
        })