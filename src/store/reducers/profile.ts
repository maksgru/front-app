import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SigninDataType,
  AuthResponseType,
  getProfileFetch,
  GoogleAuthDataType,
  googleSignInFetch,
  signInFetch,
  UserResponseType,
  UserType
} from 'api/auth';

import { storage } from 'utils';
import { RootState } from '..';

type ProfileStateStatus = 'success' | 'loading' | 'failed';
export interface ProfileState {
  data: UserType | null;
  status: ProfileStateStatus;
}

const initialState: ProfileState = {
  data: null,
  status: 'success'
};

export const getProfile = createAsyncThunk(
  'auth/me',
  async () => {
    const response = await getProfileFetch();
    return response;
  }
);

export const signUp = createAsyncThunk(
  'auth/signUn',
  async (data: SigninDataType) => {
    const response = await signInFetch(data);
    if (response.accessToken) {
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
    }
    return response;
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: SigninDataType) => {
    const response = await signInFetch(data);
    if (response.accessToken) {
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
    }
    const userId = response.user.id;
    storage.setUserId(userId);
    return response;
  }
);

export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (data: GoogleAuthDataType) => {
    const response = await googleSignInFetch(data);
    if (response.accessToken) {
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
    }
    const userId = response.user.id;
    storage.setUserId(userId);
    return response;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
      storage.dropUserData();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<UserResponseType>) => {
        state.status = 'success';
        state.data = action.payload.user;
      })
      .addCase(getProfile.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<AuthResponseType>) => {
        state.status = 'success';
        state.data = action.payload.user;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(googleSignIn.fulfilled, (state, action: PayloadAction<AuthResponseType>) => {
        state.status = 'success';
        state.data = action.payload.user;
      });
  }
});

export const selectProfile = (state: RootState): UserType | null => state.profile.data;

export const { logOut } = profileSlice.actions;
export const selectStatus = (state: RootState): ProfileStateStatus => state.profile.status;

export default profileSlice.reducer;
