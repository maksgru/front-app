import config from 'config';
import { io } from 'socket.io-client';
import { storage } from 'utils';

let deviceHash: string;
const hash = storage.getDeviceHash();

if (hash) {
  deviceHash = hash;
} else {
  storage.setDeviceHash();
  deviceHash = storage.getDeviceHash();
}

const userId = storage.getUserId();

const query: { deviceHash: string; userId?: string; unknownUser?: string } = { deviceHash };
if (userId) {
  query.userId = userId;
} else {
  query.unknownUser = '1';
}

const socket = io(config.serverUrl, { query });
socket.on('connect', () => {
  storage.setSoketId(socket.id);
});

export default socket;
