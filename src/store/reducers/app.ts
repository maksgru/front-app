import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorType } from 'api/axios';
import { storage } from 'utils';
import { THEME_DARK, THEME_LIGHT } from 'utils/constants';
import { RootState } from '..';

export type ThemeType = typeof THEME_LIGHT | typeof THEME_DARK;
export type MessengerStateType = { isMobile: boolean; isOpen: boolean }
export interface AppStateType {
  theme: ThemeType;
  isNavbarVisible: boolean,
  messengerState: MessengerStateType;
  error: ErrorType | null;
}
const currentTheme = (storage.getTheme() || THEME_LIGHT) as ThemeType;

const initialState: AppStateType = {
  theme: currentTheme,
  isNavbarVisible: false,
  messengerState: { isOpen: storage.isMessengerOpen(), isMobile: window.innerWidth < 960},
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
    toggleMessengerOpen: (state, action: PayloadAction<boolean>) => {
      state.messengerState.isOpen = action.payload;
      storage.toggleMessenger(action.payload);
    },
    toggleMessengerMobile: (state, action: PayloadAction<boolean>) => {
      state.messengerState.isMobile = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
    }
  }
});
export const selectNavbarVisibility = (state: RootState) => state.app.isNavbarVisible;
export const selectTheme = (state: RootState) => state.app.theme;
export const selectError = (state: RootState) => state.app.error;
export const selectMessengerState = (state: RootState) => state.app.messengerState;
export const { toggleTheme, toggleMessengerOpen, toggleMessengerMobile } = appSlice.actions;

export default appSlice.reducer;
