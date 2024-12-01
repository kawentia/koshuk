import { FaTimes } from 'react-icons/fa'
import { AppContext } from "./context"
import React, { useContext } from 'react';

const Modal = () => {
  const { closeModal, isModalOpen } = useContext(AppContext)

  if (!isModalOpen) return null;

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
