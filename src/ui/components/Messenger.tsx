import React, {  useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { IconButton, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { useStoreDispatch, useStoreSelector } from 'store/hooks';
import { selectMessengerState, toggleMessengerOpen } from 'store/reducers/app';
import socket from 'sockets';
import { createMessage, getMessages, newSocketMessage, selectMessagesData } from 'store/reducers/messages';
import { NEW_CHAT_MESSAGE_SERVER } from 'sockets/eventsNames';
// import { selectProfile } from 'store/reducers/profile';
import telegramAlert from 'assets/audio/telegramAlert.mp3';

const Messendger: React.FC = () => {
  const [text, setText] = useState('');
  const [activeDrags, setActiveDrags] = useState(0);
  const { isOpen } = useStoreSelector(selectMessengerState);
  const messagesData = useStoreSelector(selectMessagesData);
  // const profile = useStoreSelector(selectProfile);
  const dispatch = useStoreDispatch();
  const audio = new Audio(telegramAlert);

  useEffect(() => {
    socket.on(NEW_CHAT_MESSAGE_SERVER, (data) => {
      dispatch(newSocketMessage(data));
      audio.play();
    });
  }, [socket]);
  
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  
  const handleClose = () => {
    dispatch(toggleMessengerOpen(false));
  };

  const handleMessage = () => {
    if (!text || text === '\n') return;
    const data = { text };
    dispatch(createMessage(data));
    // const userId = socket.io.opts.query?.userId;
    // if (!userId && profile?.id) {
    //   socket.io.opts.query = { userId: `${profile.id}` };
    // }
    // socket.emit(NEW_CHAT_MESSAGE_CLIENT, text, (data: any) => {
    //   dispatch(newSocketMessage(data));
    // });
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = e;
    if (key === 'Enter') {
      e.preventDefault();
      handleMessage();
    }
  };

  const handleScroll = (e: HTMLDivElement | null, isLast: boolean) => {
    if (isLast) {
      e?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  // eslint-disable-next-line prefer-const
  const messages = messagesData?.messages ? [...messagesData.messages] : [];
  if (messages && messages.length) {
    messages.sort((a, b) => a.id - b.id);
  }
  const userId = messagesData?.userId;

  if (!isOpen) {
    return <MinimizedMessenger />;
  }
  return (
    <StyledMessendger>
      <Draggable

      >
        <div style={{position: 'absolute', bottom: '0', right: '0'}}>
          <div className="messenger">
            <div className="messenger-header">
              <button className="close-button" onClick={handleClose}>
                <CloseIcon />
              </button>
              <div className="header-body">
              </div>
            </div>
            <div className="messenger-body">
              <div className="chat-wrapper">
                {messages && messages.map(({ id, text, authorId }, idx) => (
                  <div
                    key={id}
                    className={`message ${authorId === userId && 'author'}`}
                    ref={(e) => handleScroll(e, messages ? messages.length === (idx + 1) : false)}
                  >
                    <div className={`message-text ${authorId === userId && 'text-author'}`}>
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-container">
              <TextareaAutosize
                className="message-input"
                aria-label="minimum height"
                // minRows={2}
                maxRows={4}
                onChange={({ currentTarget: { value } }) => setText(value)}
                value={text}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Minimum 3 rows"
              />
              <IconButton color="primary" onClick={handleMessage}>
                <SendIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Draggable>
    </StyledMessendger>
  );
};

const MinimizedMessenger = () => {
  const dispatch = useStoreDispatch();

  const handleOpen = () => {
    dispatch(toggleMessengerOpen(true));
  };
  return (
    <StyledMinimized>
      <div className="messenger-header">
        <button className="header-button" onClick={handleOpen}>
          <UnfoldMoreIcon />
        </button>
        <div className="header-body">
        </div>
      </div>
    </StyledMinimized>
  );
};

const StyledMinimized = styled.div`
  position: fixed;
  bottom: 10px;
  width: 270px;
  right: 5px;
  border-radius: 6px;
  overflow: hidden;
  .header-button {
    margin-left: 7px;
    height: 15px;
    width: 15px;
    border: none;
    padding: 1px;
    border-radius: 50%;
    z-index: 1;
    background: #01d601;
    animation: pulse-icon 2s infinite;
    svg {
      height: 100%;
      width: 100%;
      fill: none;
      transform: rotate(-45deg);
    }
  }
  @keyframes pulse-icon {
    0% {
      box-shadow: 0 0 2px 2px rgba(72, 255, 27, 0.548);
    }
    20% {
      box-shadow: 0 0 4px 4px rgba(72, 255, 27, 0.548);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(57, 255, 7, 0.548);
    }
}
  .messenger-header {
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    background: ${({ theme }) => theme.colors.messengerHeader};
    &:hover {
      svg {
        fill: #000000;
      }
    }
  }
`;

const StyledMessendger = styled.div`

  .messenger {
    position: fixed;
    bottom: 60px;
    right: 10px;
    height: 400px;
    width: 270px;
    border-radius: 6px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.main};
    box-shadow: ${({ theme }) => theme.shadow.cardShadow};
    &:hover {
      cursor: grab;
    }
  }
  .close-button {
    background: #ff4747;
    height: 15px;
    width: 15px;
    border: none;
    padding: 1px;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    svg {
      height: 100%;
      width: 100%;
      fill: none;
    }
  }
  .messenger-header {
    position: absolute;
    background: ${({ theme }) => theme.colors.messengerHeader};
    height: 25px;
    width: 100%;
    z-index: 1;
    &:hover {
      svg {
        fill: #000000;
      }
    }
    .header-body {

    }
  }
  .messenger-body {
    position: relative;
    padding: 25px 5px 5px 5px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .chat-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    padding-bottom: 50px;
  }
  .input-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.body};
  }
  .message-input {
    resize: none;
    border: none;
    border-radius: 4px;
    width: 100%;
    color: ${({ theme }) => theme.colors.textTitle};
    background: inherit;
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
  .message {
    border-radius: 4px;
    margin: 15px 0;
    display: flex;
    &.author {
      justify-content: flex-end;
    }
  }
  .message-text {
    width: 70%;
    border-radius: 6px;
    margin-top: 5px;
    padding: 5px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.main};
    &.text-author {
      background: ${({ theme }) => theme.colors.body};
      color: ${({ theme }) => theme.colors.textTitle};
    }
    &::after {
    }
  }
`;

export default Messendger;
