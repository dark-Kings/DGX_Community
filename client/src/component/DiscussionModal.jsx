const DiscussionModal = ({ isOpen, onRequestClose }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-3/4 bg-DGXgreen transition-transform shadow-lg`}
    >
      <div className="p-5">
        <button
          className="mb-5 p-2 bg-red-600 text-white rounded-full"
          onClick={onRequestClose}
        >
          Close
        </button>
        <div className="bg-DGXgreen">
          <h2 className="text-xl font-semibold">Offcanvas Content</h2>
          <p className="mt-2">
            This is the content inside the offcanvas component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscussionModal;
