// Actions
import * as actions from '../actions';

describe('ui actions:', () => {
    test('startFetching', () => {
        expect(actions.startFetching()).toMatchSnapshot();
    });

    test('stopFetching', () => {
        expect(actions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
    });
    test('setOnlineState', () => {
        expect(actions.setOnlineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_ONLINE_STATE",
}
`);
    });
    test('setOfflineState', () => {
        expect(actions.setOfflineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_OFFLINE_STATE",
}
`);
    });
});
