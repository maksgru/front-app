import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorType } from 'api/axios';
import { storage } from 'utils';
import { RootState } from '..';

export type ThemeType = 'light' | 'dark';
export type NavbarType = boolean;
export interface AppStateType {
  theme: ThemeType;
  isNavbarVisible: NavbarType,
  error: ErrorType | null;
}
const currentTheme = (storage.getTheme() || 'light') as ThemeType;

const initialState: AppStateType = {
  theme: currentTheme,
  isNavbarVisible: false,
  error: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      storage.setTheme(state.theme);
    },
    toggleNavbar: (state, action: PayloadAction<NavbarType>) => {
      state.isNavbarVisible = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
    }
  }
});
export const selectNavbarVisibility = (state: RootState) => state.app.isNavbarVisible;
export const selectTheme = (state: RootState) => state.app.theme;
export const selectError = (state: RootState) => state.app.error;

export const { toggleTheme, toggleNavbar } = appSlice.actions;

export default appSlice.reducer;
