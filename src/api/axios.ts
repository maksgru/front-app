import axios from 'axios';
import config from 'config';
import { storage } from 'utils';

export type ErrorType = {
  message: string;
};

const axiosInstance = axios.create({
  baseURL: `${config.serverUrl}/api`,
  withCredentials: true
});

axiosInstance.interceptors.request.use((request) => {
  const accessToken = storage.getAccessToken();
  const deviceHash = storage.getDeviceHash();
  const userId = storage.getUserId();
  const soketId = storage.getSocketId();
  if (!request.headers) { request.headers = {}; }
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  request.headers.Devicehash = deviceHash;
  if (userId && !accessToken) {
    request.headers.userid = userId;
  }
  if (soketId) {
    request.headers.soketId = soketId;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  ({ data }) => data,
  async (err) => {
    const originalRequest = err.config;

    if (originalRequest.url === '/auth/token-refresh') {
      storage.dropStorage();
      return Promise.reject(err.response);
    }
    const refreshToken = storage.getRefreshToken();
    if (!refreshToken) {
      return Promise.reject(err.response);
    }
    const response: { accessToken: string; refreshToken: string } = await axiosInstance.post('/auth/token-refresh', { refreshToken });
    if (response.accessToken) {
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
      originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
      return axios(originalRequest).then(({ data }) => data);
    }
    storage.dropStorage();
    return Promise.reject(err.response);
  }
);

export default axiosInstance;
