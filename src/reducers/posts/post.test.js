import {
    types
} from './../../actions/types'
import postReducer from './reducer';

describe('Post Reducer', () => {
    it('should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    })
    it('should return new state if receiving type', () => {
        const posts = [{
            title: 'Test 1'
        }, {
            title: 'Test 2'
        }, {
            title: 'Test 3'
        }]
        console.log(posts)
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);

    })
})