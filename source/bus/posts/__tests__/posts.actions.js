// Instruments
import { postsActions } from '../actions';

describe('posts actions:', () => {
    test('FETCH_POSTS:', () => {
        expect(postsActions.fetchPosts()).toMatchSnapshot();
    });
});
