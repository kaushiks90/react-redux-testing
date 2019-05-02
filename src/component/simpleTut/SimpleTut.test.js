import SimpleTut from './index';
import {
    shallow
} from 'enzyme';
import {
    findByTestAttr,
    checkProps,
    testStore
} from './../../utils/index'
import React from 'react';


const setUp = (initialState = {}) => {
        const store = testStore(initialState);
        const wrapper = shallow( < SimpleTut store = {
                store
            }
            />).childAt(0).dive();
            return wrapper;
        };

        describe('App Component', () => {

            let wrapper;
            beforeEach(() => {
                const initialState = {
                    posts: [{
                        title: 'Example title 1',
                        body: 'Some text'
                    }, {
                        title: 'Example title 2',
                        body: 'Some text'
                    }, {
                        title: 'Example title 3',
                        body: 'Some text'
                    }]
                }
                wrapper = setUp(initialState);
            });

            it('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'app');
                expect(component.length).toBe(1);
            });


        });