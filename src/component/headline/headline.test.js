import React from 'react'
import {
    shallow
} from 'enzyme';
import Headline from './index';
import {
    findByTestAttr
} from '../../utils/index'
import checkPropTypes from 'check-prop-types'

const setUp = (props = {}) => {
        const component = shallow( < Headline {
                ...props
            }
            />)
            return component;
        }

        describe('Headline Component', () => {

            describe('checking propTypes', () => {
                it('should not throw a warning', () => {
                    const expectedProps = {
                        header: 'Test Header',
                        desc: "Test desc",
                        tempArr: [{
                            fName: 'Test fName',
                            lName: 'Test lName',
                            email: 'test@gmail.com',
                            age: 23,
                            onlineStatus: false
                        }]
                    }
                    const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
                    expect(propsErr).toBeUndefined();
                })
            })

            describe('Have props', () => {
                let wrapper;
                beforeEach(() => {
                    const props = {
                        header: 'Test Header',
                        desc: 'Test desc'
                    }
                    wrapper = setUp(props)
                })
                it('should render without errors', () => {
                    const component = findByTestAttr(wrapper, 'HeadlineComponent');
                    expect(component.length).toBe(1);
                })
                it('should render a h1', () => {
                    const h1 = findByTestAttr(wrapper, 'header');
                    expect(h1.length).toBe(1)

                })
                it('should render a desc', () => {
                    console.log(wrapper)
                    const desc = findByTestAttr(wrapper, 'desc');
                    expect(desc.length).toBe(1);
                })


            })
            describe('Have no props', () => {
                let wrapper;
                beforeEach(() => {
                    wrapper = setUp()
                    console.log(wrapper)
                })
                it('should not render', () => {
                    const component = findByTestAttr(wrapper, 'HeadlineComponent');
                    expect(component.length).toBe(0)
                })
            })
        })