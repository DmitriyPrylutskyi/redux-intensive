// Instruments
import { MAIN_URL, groupId } from './config';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    getHeaders (json) {
        if (json) {
            return {
                Authorization:  this.token,
                'Content-Type': 'application/json',
            };
        }

        return {
            Authorization: this.token,
        };
    },
    auth: {
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:  'POST',
                headers: this.getHeaders(true),
                body:    JSON.stringify(userInfo),
            });
        },
        login (credentials) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: this.getHeaders(true),
                body:    JSON.stringify(credentials),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: this.getHeaders(true),
                body:    JSON.stringify({ token: this.token }),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  'GET',
                headers: this.getHeaders(),
            });
        },
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: this.getHeaders(true),
                body:    JSON.stringify({
                    comment,
                }),
            });
        },
        remove (postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method:  'DELETE',
                headers: this.getHeaders(),
            });
        },
        like (postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                method:  'PUT',
                headers: this.getHeaders(),
            });
        },
    },
    profile: {
        updateInfo (userInfo) {
            return fetch(`${MAIN_URL}/user`, {
                method:  'PUT',
                headers: this.getHeaders(true),
                body:    JSON.stringify(userInfo),
            });
        },
        updateAvatar (avatarFormData) {
            return fetch(`${MAIN_URL}/image`, {
                method:  'POST',
                headers: this.getHeaders(),
                body:    avatarFormData,
            });
        },
    },
    users: {
        fetch () {
            return fetch(`${MAIN_URL}/user/all`, {
                method:  'GET',
                headers: this.getHeaders(),
            });
        },
    },
};
