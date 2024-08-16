import React, { useState } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { images } from "../constant/index.js";

const DiscussionModal = ({ isOpen, onRequestClose, discussion }) => {
  const [dissComments, setDissComments] = useState([]);

  const [newComment, setNewComment] = useState("");
  const [replyTexts, setReplyTexts] = useState({});

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        username: "New User",
        timestamp: new Date().toLocaleString(),
        commentData: newComment,
        likes: 0,
        replies: [],
      };

      setDissComments([...dissComments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleReplyTextChange = (index, text) => {
    setReplyTexts((prevState) => ({
      ...prevState,
      [index]: text,
    }));
  };

  const handleAddReply = (commentIndex, replyText) => {
    if (replyText.trim() !== "") {
      const updatedComments = [...dissComments];
      updatedComments[commentIndex].replies.push({
        username: "New User", // Replace with actual username logic
        timestamp: new Date().toLocaleString(),
        reply: replyText,
      });

      setDissComments(updatedComments);
      setReplyTexts((prevState) => ({
        ...prevState,
        [commentIndex]: "",
      }));
    }
  };

  return (
    <div>
      {/* Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 flex justify-center items-center">
          {/* Modal */}
          <div
            className={`w-[calc(100%-1rem)] h-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] lg:h-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] xl:h-[calc(100%-6rem)] bg-DGXwhite transition-transform shadow-lg transform ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } z-50 flex flex-col overflow-auto`}
          >
            <div className="px-2 sm:px-5 w-full flex flex-col flex-grow overflow-auto">
              <div className="flex justify-between">
                {/* <div className="p-4"> */}
                <div className="border-l-4 border-DGXblue flex items-center justify-between p-2 sm:p-4">
                  <img
                    src={discussion.Image}
                    className="w-16 sm:w-24 object-cover rounded-full aspect-square"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-3xl">{discussion.Title}</div>
                    <div className="flex flex-col">
                      <span>{new Date(discussion.Date).toLocaleString()}</span>
                      <span className="flex items-center gap-2">
                        <FaThumbsUp />
                        {discussion.likeCount}
                        <FaComment /> {discussion.comment.length}
                      </span>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                <button
                  className="text-2xl sm:text-4xl self-start"
                  onClick={onRequestClose}
                >
                  {" "}
                  ×{" "}
                </button>
              </div>

              <div className="bg-DGXwhite p-2 sm:p-4 rounded-lg flex flex-grow flex-col md:flex-row overflow-auto">
                {/* Post/Discussion Section */}
                <div className="w-full md:w-1/2 p-2 sm:p-4 border-b md:border-b-0 md:border-r border-gray-200 overflow-auto">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                    {discussion.title}
                  </h2>

                  {/* Image */}
                  {discussion.Image && (
                    <div className="max-w-sm mx-auto mb-4 sm:mb-4">
                      <img
                        src={discussion.Image}
                        alt="Post"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content */}
                  {discussion.Content && (
                    <div className="mb-2 sm:mb-4">{discussion.Content}</div>
                  )}

                  {/* Tags */}
                  {discussion.Tag && (
                    <div className="mb-2 sm:mb-4">
                      <h3 className="text-md sm:text-lg font-semibold">
                        Tags:
                      </h3>
                      <ul className="flex flex-wrap mt-1 sm:mt-2">
                        {discussion.Tag.split(',').map((tag, index) => (
                          <li
                            key={index}
                            className="bg-DGXblue text-DGXwhite py-1 px-2 rounded-full text-xs sm:text-sm mr-2 mb-2"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  {discussion.ResourceUrl && (
                    <div>
                      <h3 className="text-md sm:text-lg font-semibold">
                        Links:
                      </h3>
                      <ul className="list-disc list-inside">
                        {discussion.ResourceUrl.split(',').map((link, index) => (
                          <li key={index}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-DGXblue"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Comments Section */}
                <div className="w-full md:w-1/2 p-2 sm:p-4 overflow-auto flex flex-col flex-grow">
                  <div className="p-4 w-full text-end">
                    <textarea
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="md:w-auto rounded border-2 border-DGXblue p-2 xl:w-full"
                      placeholder="Add a comment..."
                    />
                    <button
                      onClick={handleAddComment}
                      className="my-4 md:w-1/4 bg-DGXgreen hover:bg-DGXblue rounded text-white text-xl p-2"
                    >
                      Add Comment
                    </button>
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                    Comments
                  </h2>
                  <ul className="space-y-4">
                    {discussion.comment.map((comment, index) => (
                      <li
                        key={index}
                        className="p-2 sm:p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-md sm:text-lg font-semibold">
                            {comment.UserName}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {comment.timestamp}
                          </span>
                        </div>
                        <div className="text-md sm:text-lg">
                          {comment.Comment}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaThumbsUp />
                          <span>{comment.likeCount}</span>
                        </div>
                        <div>
                          {comment.comment && comment.comment.map((reply, replyIndex) => (
                            <div
                              key={replyIndex}
                              className="ml-4 p-2 sm:p-4 border-l border-gray-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-md sm:text-lg font-semibold">
                                  {reply.UserName}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-500">
                                  {reply.timestamp}
                                </span>
                              </div>
                              <div className="text-md sm:text-lg">
                                {reply.Comment}
                              </div>
                              <div className="flex items-center gap-2">
                          <FaThumbsUp />
                          <span>{reply.likeCount}</span>
                        </div>
                            </div>
                          ))}
                        </div>
                        <div className="p-2 sm:p-4 border-t border-gray-200">
                          <textarea
                            rows={1}
                            value={replyTexts[index] || ""}
                            onChange={(e) =>
                              handleReplyTextChange(index, e.target.value)
                            }
                            className="md:w-auto rounded border-2 border-DGXblue p-2 xl:w-full"
                            placeholder="Reply to this comment..."
                          />
                          <button
                            onClick={() =>
                              handleAddReply(index, replyTexts[index])
                            }
                            className="my-2 md:w-1/4 bg-DGXgreen hover:bg-DGXblue rounded text-white text-xl p-2"
                          >
                            Add Reply
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
``;

export default DiscussionModal;
