import React from 'react';
import styled from 'styled-components';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { useStoreDispatch } from 'store/hooks';
import { toggleMessengerOpen } from 'store/reducers/app';

const MinimizedMessenger: React.FC = () => {
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
  bottom: 0;
  width: 270px;
  right: 0;
  border-radius: 6px 0 0 6px;
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
    background: ${({ theme }) => theme.colors.activeIcon};
    &:hover {
      svg {
        fill: #000000;
      }
    }
  }
`;

export default MinimizedMessenger;
