import React from 'react';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

type ConfirmModalType = {
  open: boolean;
  onDecline: () => void;
  onConfirm: () => void;
  title?: string;
  text?: string;
};

const ConfirmModal: React.FC<ConfirmModalType> = (props) => {
  const { open, onConfirm, onDecline, title, text } = props;
  return (
    <StyledDialog
      open={open}
      onClose={onDecline}
      classes={{ paper: 'dialog-paper' }}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      {text && <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>}
      <DialogActions>
        <Button variant="contained" onClick={onDecline}>Cancel</Button>
        <Button onClick={onConfirm}>
            Confirm
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  .dialog-paper {
    min-width: 350px;
  }
`;

ConfirmModal.defaultProps = {
  title: 'Confirm action'
};

export default ConfirmModal;
