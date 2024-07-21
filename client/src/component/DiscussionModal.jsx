// import React from 'react';
import PropTypes from 'prop-types';
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
  );
};

DiscussionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default DiscussionModal;
