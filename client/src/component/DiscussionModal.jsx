import React from 'react'
import Modal from 'react-modal';

const DiscussionModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2 className="text-2xl font-bold">Join the Discussion</h2>
            <button onClick={onRequestClose} className="close-button">Close</button>
            {/* Modal content here */}
        </Modal>
  )
}

export default DiscussionModal