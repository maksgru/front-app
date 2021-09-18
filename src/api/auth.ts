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

export interface UserPesponseType {
  user: UserType
}
export interface AuthDataType {
  email: string;
  password: string;
}

export interface AuthResponseType extends UserPesponseType {
  accessToken: string;
  refreshToken: string;
}
export const signInFetch = (data: AuthDataType): Promise<AuthResponseType> => axios.post('/auth/sign-in', data);

export const getProfileFetch = (): Promise<UserPesponseType> => axios.get('/auth/me');
