import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    findByTestAttr,
    checkProps
} from './../../utils/index'
import ListItem from './index'

const setUp = (props = {}) => {
        const component = shallow( < ListItem {
                ...props
            }
            />)
            return component;
        }
        describe('ListItem Component', () => {
            describe('Checking PropTypes', () => {
                it('should not throw a warning', () => {
                    const expectedProps = {
                        title: 'Example title',
                        desc: 'Some text'
                    }
                    const propsError = checkProps(ListItem, expectedProps);
                    expect(propsError).toBeUndefined()
                })
            })

            describe('Component should render', () => {
                let wrapper;
                beforeEach(() => {
                    const props = {
                        title: 'Example title',
                        desc: 'Example desc'
                    }
                    wrapper = setUp(props)
                })

                it('should render component without an error', () => {
                    const component = findByTestAttr(wrapper, 'listItemComponent')
                    expect(component.length).toBe(1)
                })
                it('should render h2  title without an error', () => {
                    const title = findByTestAttr(wrapper, 'componentTitle')
                    expect(title.length).toBe(1)
                })
                it('should render div desc without an error', () => {
                    const div = findByTestAttr(wrapper, 'componentDesc')
                    expect(div.length).toBe(1)
                })

            })

            describe('Component Should not render', () => {
                let wrapper
                beforeEach(() => {
                    const props = {}
                    wrapper = setUp(props)
                })
                it('should not render the component', () => {
                    const component = findByTestAttr(wrapper, "listItemCoponent")
                    expect(component.length).toBe(0)
                })
            })


        })