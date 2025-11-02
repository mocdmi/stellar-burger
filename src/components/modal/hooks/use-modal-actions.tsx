import { useModalContext } from './modal-context';

import type { TModalType, TOpenArgs } from '../types/common';

export const useModalActions = (): {
  openModal: <T extends TModalType>({ modalType, payload }: TOpenArgs<T>) => void;
  closeModal: () => void;
} => {
  const context = useModalContext();

  return {
    openModal: context.open,
    closeModal: context.close,
  };
};
