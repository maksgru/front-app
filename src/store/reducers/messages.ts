import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMessagesFetch, MessageResponseType, MessagesResponseType, MessageType, NewMessageType, sendMessageFetch } from 'api/messages';
import { storage } from 'utils';
import { RootState } from '..';

type MessagesStateStatus = 'success' | 'loading' | 'failed';

type MessagesDataType = {
  messages: MessageType[];
  userId: number;
}
interface MessagesState {
  data: MessagesDataType | null;
  status: MessagesStateStatus
}
const initialState: MessagesState = {
  data: null,
  status: 'success'
};

export const getMessages = createAsyncThunk(
  'messages/getAll',
  async () => {
    const response = await getMessagesFetch();
    return response;
  }
);

export const createMessage = createAsyncThunk(
  'messages/create',
  async (data: NewMessageType) => {
    const response = await sendMessageFetch(data);
    storage.setUserId(response.userId);
    return response;
  }
);


export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    dropMessages: (state) => {
      state.data = null;
    },
    newSocketMessage: (state, action: PayloadAction<MessageType>) => {
      if (state.data && state.data.messages) {
        const newMessages = [...state.data.messages, action.payload];
        state.data.messages = newMessages;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMessages.fulfilled, (state, action: PayloadAction<MessagesResponseType>) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getMessages.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createMessage.fulfilled, (state, action: PayloadAction<MessageResponseType>) => {
        state.status = 'success';
        if (!state.data || !state.data.messages) {
          state.data = {
            messages: [action.payload.message],
            userId: action.payload.userId
          };
        }
        const messages = [action.payload.message, ...state.data.messages];
        state.data.messages = messages;
        state.data.userId = action.payload.userId;
      });
  }
});

export const selectMessagesData = (state: RootState): MessagesDataType | null => state.messages.data;

export const { dropMessages, newSocketMessage } = messagesSlice.actions;
export const selectStatus = (state: RootState): MessagesStateStatus => state.messages.status;

export default messagesSlice.reducer;
