import axios from './axios';

export interface NewMessageType {
  text: string;
}

export interface MessageType {
  id: number;
  text: string;
  authorId: number;
  receiverId: number;
  // deviceHash: string;
}

export type MessagesResponseType = {
  messages: MessageType[];
  userId: number;
};

export type MessageResponseType = {
  message: MessageType;
  userId: number;
}

export const sendMessageFetch = (data: NewMessageType): Promise<MessageResponseType> => axios.post('/messages', data);
export const getMessagesFetch = (): Promise<MessagesResponseType> => axios.get('/messages');