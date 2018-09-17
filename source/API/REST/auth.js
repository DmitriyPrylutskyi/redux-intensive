// Instruments
import { MAIN_URL, groupId } from '../config';

export class Auth {
    async signup(userData) {
        const response = await fetch(`${MAIN_URL}/user/${groupId}`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const { data, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return data;
    }

    async login(credentials) {
        const response = await fetch(`${MAIN_URL}/user/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const { data, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return data;
    }

    async logout(token) {
        const response = await fetch(`${MAIN_URL}/user/logout`, {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = await response.json();
            throw new Error(message);
        }
    }
}
