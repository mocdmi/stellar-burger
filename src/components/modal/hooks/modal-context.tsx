import { createContext, useContext } from 'react';

import type { useModal } from './use-modal';

type TModalContext = ReturnType<typeof useModal>;

export const modalContext = createContext<TModalContext | null>(null);

export const useModalContext = (): TModalContext => {
  const context = useContext<TModalContext | null>(modalContext);

  if (!context) {
    throw new Error('useModalContext must be used within ModalProvider');
  }

  return context;
};
