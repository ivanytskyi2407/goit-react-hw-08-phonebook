import { useState } from 'react';
import Modal from 'react-modal';
import { CgClose } from 'react-icons/cg';
import styles from './Modal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ children, buttonClose }) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button type="button" className={styles.buttonClose} onClick={closeModal}>
        <CgClose />
      </button>
      {children}
    </Modal>
  );
};
