// Instruments
import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import { postsActions } from '../posts/actions';

export const socketActions = Object.freeze({
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState(true));
        });

        socket.on('disconnect', () => {
            dispatch(uiActions.setOnlineState(false));
        });
    },

    listenPosts: () => (dispatch, getState) => {
        socket.on('create', (response) => {
            const { data, meta } = JSON.parse(response);

            if (getState().profile.get('id') === meta.userID) {
                return;
            }

            dispatch(postsActions.createPost(data));
        });

        socket.on('remove', (response) => {
            const { data, meta } = JSON.parse(response);

            if (getState().profile.get('id') === meta.userID) {
                return;
            }

            dispatch(postsActions.removePost(data));
        });

        socket.on('like', (response) => {
            const { data, meta } = JSON.parse(response);

            if (getState().profile.get('id') === meta.userID) {
                return;
            }

            if (meta.action === 'like') {
                const liker = getState()
                    .users.find((user) => user.get('id') === data.userID)
                    .delete('avatar');

                dispatch(
                    postsActions.likePost({
                        postID: data.postID,
                        liker,
                    })
                );

                return;
            }

            dispatch(postsActions.unlikePost(data));
        });
    },
});
