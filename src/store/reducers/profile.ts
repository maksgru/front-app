import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthDataType,
  AuthResponseType,
  getProfileFetch,
  signInFetch,
  UserPesponseType,
  UserType
} from 'api/auth';

import { storage } from 'utils';
import { RootState } from '..';

export interface ProfileState {
  data: UserType | null;
  status: 'success' | 'loading' | 'failed';
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

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: AuthDataType) => {
    const response = await signInFetch(data);
    if (response.accessToken) {
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
    }
    return response;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
      storage.dropStorage();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<UserPesponseType>) => {
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
      });
  }
});

export const selectProfile = (state: RootState) => state.profile.data;

export const { logOut } = profileSlice.actions;
export const selectStatus = (state: RootState) => state.profile.status;

export default profileSlice.reducer;
