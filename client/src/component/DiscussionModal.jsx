import React from "react";
import Modal from "react-modal";

const DiscussionModal = ({ isOpen, onRequestClose }) => {
  return (

     <div
        id="modal"
        className="fixed bottom-0 left-0 right-0 w-4/5 rounded mx-auto h-4/5 bg-black bg-DGXgreen z-30"
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          <button
              id="closeModalBtn"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onRequestClose}
            >
              Close
            </button>
          </div>
        <div className="bg-white p-6 rounded-lg border w-full">
          
          <p className="mb-4">
            This is the modal body content. It can contain text, images, or any
            other HTML elements.
          </p>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
  );
};

export default DiscussionModal;
