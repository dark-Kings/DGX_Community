import React from 'react';
import { images } from '../constant';

const DiscussionModal = ({ isOpen, onRequestClose, postContent = {}, comments = [] }) => {
  const { image, content, tags = [], links = [], user = {} } = postContent;

  return (
    <div>
      {/* Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 flex justify-center items-center">
          {/* Modal */}
          <div
            className={`w-[calc(100%-4rem)] h-[calc(100%-4rem)] md:w-[calc(100%-2rem)] md:h-[calc(100%-2rem)] bg-DGXwhite transition-transform shadow-lg transform ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            } z-50 flex flex-col md:flex-row`}
          >
            <div className="p-5 w-full flex flex-col">
              <button
                className="mb-5 p-2 bg-DGXblue text-white rounded-full self-end"
                onClick={onRequestClose}
              >
                Close
              </button>
              <div className="bg-DGXwhite p-4 rounded-lg flex flex-grow flex-col md:flex-row overflow-auto">
                {/* Post/Discussion Section */}
                <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-200 overflow-auto">
                  <h2 className="text-xl font-semibold mb-4">Post/Discussion</h2>
                  
                  {/* User Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={images.SharadSir}
                      alt={`${user.username}'s profile`}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{user.username}</h3>
                      <p className="text-gray-500">{user.timestamp}</p>
                    </div>
                  </div>

                  {/* Image */}
                  {image && (
                    <div className="mb-4">
                      <img
                        src={images.nvidiaEvent01}
                        alt="Post"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content */}
                  {content && <div className="mb-4">{content}</div>}

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Tags:</h3>
                      <ul className="flex flex-wrap mt-2">
                        {tags.map((tag, index) => (
                          <li
                            key={index}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  {links.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold">Links:</h3>
                      <ul className="mt-2">
                        {links.map((link, index) => (
                          <li key={index} className="mb-2">
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-DGXblue underline"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Comments Section */}
                <div className="w-full md:w-1/2 p-4 overflow-auto">
                  <h2 className="text-xl font-semibold mb-4">Comments</h2>
                  <div>{comments}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionModal;
