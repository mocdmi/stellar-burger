import { useState } from 'react';

import type { TModalType, TOpenArgs } from '../types/common';

type TModal = {
  isModalOpen: boolean;
  payload?: unknown; // TODO: Типизировать
  modalType: TModalType | null;
  open: <T extends TModalType>({ modalType, payload }: TOpenArgs<T>) => void;
  close: () => void;
};

export function useModal(): TModal {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payload, setPayload] = useState<unknown>();
  const [type, setType] = useState<TModalType | null>(null);

  function open<T extends TModalType>({ modalType, payload }: TOpenArgs<T>): void {
    setIsModalOpen(true);
    setType(modalType);
    setPayload(payload);
  }

  const close = (): void => {
    setIsModalOpen(false);
    setType(null);
    setPayload(undefined);
  };

  return {
    isModalOpen,
    payload,
    modalType: type,
    open,
    close,
  };
}
