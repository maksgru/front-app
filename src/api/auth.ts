import axios from './axios';

export interface UserType {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  info: string;
  email: string;
  role: string;
}

export interface UserResponseType {
  user: UserType
}
export interface SigninDataType {
  email: string;
  password?: string;
}

export interface SignupDataType extends SigninDataType {
  firstName?: string;
  lastName?: string;
}

export interface AuthResponseType extends UserResponseType {
  accessToken: string;
  refreshToken: string;
}

export interface GoogleAuthDataType {
  googleId: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const signInFetch = (data: SigninDataType): Promise<AuthResponseType> => axios.post('/auth/sign-in', data);
export const signUpFetch = (data: SignupDataType): Promise<AuthResponseType> => axios.post('/auth/sign-up', data);
export const googleSignInFetch = (data: GoogleAuthDataType): Promise<AuthResponseType> => axios.post('/auth/google-sign-in', data);

export const getProfileFetch = (): Promise<UserResponseType> => axios.get('/auth');
