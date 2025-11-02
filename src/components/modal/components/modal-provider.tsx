import { modalContext } from '../hooks/modal-context';
import { useModal } from '../hooks/use-modal';

import type { ReactNode } from 'react';

export const ModalProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const modal = useModal();

  return <modalContext.Provider value={modal}>{children}</modalContext.Provider>;
};
