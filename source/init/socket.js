// Core
import io from 'socket.io-client';

// Instruments
import { ROOT_URL, groupId } from '../REST';

export const socket = io(ROOT_URL, {
    path: '/redux/ws',
});

export const joinSocketChannel = () => {
    socket.emit('join', groupId);
};
