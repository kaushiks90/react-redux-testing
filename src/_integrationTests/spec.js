import moxios from 'moxios';
import {
    testStore
} from '../utils/index';
import {
    fetchPosts
} from '../actions/index'


describe('fetch posts', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test('store is update properly', () => {
        const expectedState = [{
            title: 'Example title 1',
            body: 'Some Text'
        }, {
            title: 'Example title 2',
            body: 'Some Text'
        }, {
            title: 'Example title 3',
            body: 'Some Text'
        }];

        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState()
            expect(newState.posts).toBe(expectedState);
        })
    })
})