import styles from './modal-overlay.module.css';

export const ModalOverlay = ({
  onClick,
}: {
  onClick: () => void;
}): React.JSX.Element => {
  return <div className={styles.modal_overlay} onClick={onClick} />;
};
