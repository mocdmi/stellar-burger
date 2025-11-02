import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { useModalContext } from './hooks/modal-context';
import { modalRegistry } from './utils/modal-registry';

import styles from './modal.module.css';

export const Modal = (): React.JSX.Element | null => {
  const { isModalOpen, payload, modalType, close } = useModalContext();

  if (!isModalOpen || !modalType) return null;

  const ModalComponent = modalRegistry[modalType] as React.ComponentType<{
    payload: typeof payload;
  }>;

  if (!ModalComponent) return null;

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <button className={styles.close_button} onClick={close}>
          <CloseIcon type="primary" />
        </button>
        <ModalComponent payload={payload} />
      </div>
      <ModalOverlay onClick={close} />
    </div>,
    document.querySelector('body')!
  );
};
