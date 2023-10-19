import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalOptions = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Option Modal'
      className='modal-content'
      overlayClassName='modal-overlay'
    >
      <div className='modal-header'>
        <h2>Welcome!</h2>
      </div>
      <div className='modal-body'>
        <p>Would you like to</p>
        <button onClick={onRequestClose}>Login</button>
        <p>Or</p>
        <button onClick={onRequestClose}>Register</button>
      </div>
    </Modal>
  );
};

export default ModalOptions;
