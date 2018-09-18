// Instruments
import { socket } from '../../init/socket';
import { setOnlineState, setOfflineState } from '../ui/actions';
import { createPost, removePost, likePost, unlikePost } from '../posts/actions';
import { Map } from 'immutable';

// Api
import { api } from '../../API';

export const listenConnection = () => {
    return (dispatch) => {
        socket.on('connect', () => {
            dispatch(setOnlineState());
        });

        socket.on('disconnect', () => {
            dispatch(setOfflineState());
        });
    };
};

export const listenPosts = () => {
    return (dispatch, getState) => {
        socket.on('like', async (event) => {
            const response = JSON.parse(event);
            if (response.meta.action === 'dislike') {
                dispatch(unlikePost(response.data));
            } else {
                const { firstName, lastName } = await api.users.getById.call(
                    api,
                    response.data.userId,
                );

                const liker = Map({
                    firstName,
                    lastName,
                    id: response.data.userId,
                });

                dispatch(
                    likePost({
                        postId: response.data.postId,
                        liker,
                    }),
                );
            }
        });

        socket.on('create', (event) => {
            const response = JSON.parse(event);
            dispatch(createPost(response.data));
        });

        socket.on('remove', (event) => {
            const response = JSON.parse(event);
            dispatch(removePost(response.data));
        });
    };
};
