import { ThemeType } from '../store/reducers/app';

export const storage = {
  getAccessToken: () => localStorage.getItem('accessToken'),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setAccessToken: (token: string) => localStorage.setItem('accessToken', token),
  setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),
  dropStorage: () => localStorage.clear(),
  getTheme: () => localStorage.getItem('theme'),
  setTheme: (theme: ThemeType) => localStorage.setItem('theme', theme)
};
