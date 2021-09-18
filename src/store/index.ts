import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducrer from './reducers/app';
import profileReducer from './reducers/profile';

export const store = configureStore({
  reducer: {
    app: appReducrer,
    profile: profileReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
