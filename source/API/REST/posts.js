// Instruments
import { MAIN_URL, groupId } from '../config';

export class Posts {
    async get() {
        const response = await fetch(`${MAIN_URL}/feed`, {
            method:  'GET',
            headers: {
                'x-no-auth': groupId,
            },
        });

        const { data, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return data;
    }

    async like(postId) {
        const response = await fetch(`${MAIN_URL}/feed/like/${postId}`, {
            method:  'PUT',
            headers: {
                Authorization: this.token,
            },
        });

        if (response.status !== 204) {
            const { message } = await response.json();
            throw new Error(message);
        }
    }
}
