import React from 'react';
import { useStoreSelector } from 'store/hooks';
import { selectMessengerState } from 'store/reducers/app';

const Messenger = () => {
  const { isMobile, isOpen } = useStoreSelector(selectMessengerState);
  return null;
};

export default Messenger;
