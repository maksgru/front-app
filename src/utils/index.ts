import crypto from 'crypto';
import { ACCESS_TOKEN_KEY,
  DEVICE_HASH_KEY,
  MESSENGER_CLOSE,
  MESSENGER_OPEN,
  MESSENGER_STATUS_KEY,
  REFRESH_TOKEN_KEY,
  SOCKET_ID_KEY,
  THEME_KEY, 
  USER_ID_KEY} from './constants';
import { ThemeType } from '../store/reducers/app';

const encodeId = (id: number) => `${DEVICE_HASH_KEY}${id}${USER_ID_KEY}`;

export const storage = {
  getAccessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  setAccessToken: (token: string) => localStorage.setItem(ACCESS_TOKEN_KEY, token),
  setRefreshToken: (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token),
  dropStorage: () => localStorage.clear(),
  dropUserData: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_ID_KEY);
  },
  getTheme: () => localStorage.getItem(THEME_KEY),
  setTheme: (theme: ThemeType) => localStorage.setItem(THEME_KEY, theme),
  toggleMessenger: (isVisible: boolean) => localStorage.setItem(MESSENGER_STATUS_KEY, isVisible ? MESSENGER_OPEN : MESSENGER_CLOSE),
  isMessengerOpen: () => {
    const item = localStorage.getItem(MESSENGER_STATUS_KEY);
    if (item === null) {
      storage.toggleMessenger(true);
      return true;
    }
    return item === MESSENGER_OPEN;
  },
  setDeviceHash: () => localStorage.setItem(DEVICE_HASH_KEY, hash.randomGenerate()),
  getDeviceHash: () => localStorage.getItem(DEVICE_HASH_KEY) || '',
  setUserId: (id: number) => localStorage.setItem(USER_ID_KEY, encodeId(id)),
  getUserId: () => {
    const encodedId = localStorage.getItem(USER_ID_KEY);
    if (!encodedId) return null;
    const id = encodedId.replace(USER_ID_KEY, '').replace(DEVICE_HASH_KEY, '');
    return id;
  },
  setSoketId: (id: string) => localStorage.setItem(SOCKET_ID_KEY, id),
  getSocketId: () => localStorage.getItem(SOCKET_ID_KEY)
};

export const hash = {
  randomGenerate: (length = 20) => crypto.randomBytes(length).toString('hex')
};
