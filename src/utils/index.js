import checkPropTypes from 'check-prop-types'
import {
    applyMiddleware,
    createStore
} from 'redux';
import rootReducer from '../reducers/index'
import {
    middlewares
} from '../createStore'
export const findByTestAttr = (component, attr) => {

    const wrapper = component.find(`[data-test='${attr}']`)

    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const updateInput = (component, attr, newValue) => {
    const input = component.find(`[data-test='${attr}']`)
    input.simulate('change', {
        currentTarget: {
            value: newValue
        }
    })

    return input.find(`[data-test='${attr}']`);
}