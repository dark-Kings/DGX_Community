import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { images } from "../constant/index.js";

const DiscussionModal = ({
  isOpen,
  onRequestClose,
  postContent = {},
  comments = [],
}) => {
  const { image, content, tags = [], links = [] } = postContent;

  const user = {
    userProfile: "",
    userName: "User has this name",
    likeCount: 45,
    comments: 3,
  };
  const discussion = {
    title: "Some Title of the Topic",
    image:images.nvbackground,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis id, maiores rerum voluptas voluptatibus non placeat, provident doloribus atque minima aperiam? Nulla provident odio est laboriosam natus. Dolores, animi modi?",
    tags: [
      "Artificial Intelligence",
      "DGX Servers",
      "Artificial Intelligence",
      "DGX Servers",
      "Artificial Intelligence",
      "DGX Servers",
      "Artificial Intelligence",
      "DGX Servers",
      "Artificial Intelligence",
      "DGX Servers",
    ],
    links: [
      "https://www.google.com/",
      "https://www.youtube.com/",
      "https://www.google.com/",
      "https://www.youtube.com/",
      "https://www.google.com/",
      "https://www.youtube.com/",
      "https://www.google.com/",
      "https://www.youtube.com/",
      "https://www.google.com/",
      "https://www.youtube.com/",
    ],
  };
  const dissComments = [
    {
      usernamr: "Comment User 1",
      commentData:
        "Comment 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
      likes: 4,
      timestamp: new Date().toLocaleString(),
      replies: [
        {
          username: "User 1",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 2",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 3",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
      ],
    },
    {
      usernamr: "Comment User 2",
      commentData:
        "Comment 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
      likes: 4,
      timestamp: new Date().toLocaleString(),
      replies: [
        {
          username: "User 1",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 2",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 3",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
      ],
    },
    {
      usernamr: "Comment User 3",
      commentData:
        "Comment 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
      likes: 4,
      timestamp: new Date().toLocaleString(),
      replies: [
        {
          username: "User 1",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 2",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
        {
          username: "User 3",
          timestamp: new Date().toLocaleString(),
          reply:
            "reply1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit beatae, laborum officia quod animi vel. Eius, perspiciatis, fugiat commodi asperiores voluptates laudantium fugit sunt itaque quaerat nobis doloremque aperiam.",
        },
      ],
    },
  ];
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
                    src={discussion.image}
                    className="w-16 sm:w-24 object-cover rounded-full aspect-square"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-3xl">{user.userName}</div>
                    <div className="flex flex-col">
                      <span>{new Date().toLocaleString()}</span>
                      <span className="flex items-center gap-2">
                        <FaThumbsUp />
                        {user.likeCount}
                        <FaComment /> {user.comments}
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
                  {discussion.image && (
                    <div className="mb-4 sm:mb-4">
                      <img
                        src={discussion.image}
                        alt="Post"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content */}
                  {discussion.content && (
                    <div className="mb-2 sm:mb-4">{discussion.content}</div>
                  )}

                  {/* Tags */}
                  {discussion.tags.length > 0 && (
                    <div className="mb-2 sm:mb-4">
                      <h3 className="text-md sm:text-lg font-semibold">Tags:</h3>
                      <ul className="flex flex-wrap mt-1 sm:mt-2">
                        {discussion.tags.map((tag, index) => (
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
                  {discussion.links.length > 0 && (
                    <div>
                      <h3 className="text-md sm:text-lg font-semibold">Links:</h3>
                      <ul className="list-disc list-inside">
                        {discussion.links.map((link, index) => (
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
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                    Comments
                  </h2>
                  <ul className="space-y-4">
                    {dissComments.map((comment, index) => (
                      <li
                        key={index}
                        className="p-2 sm:p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-md sm:text-lg font-semibold">
                            {comment.username}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {comment.timestamp}
                          </span>
                        </div>
                        <div className="text-md sm:text-lg">{comment.commentData}</div>
                        <div className="flex items-center gap-2">
                          <FaThumbsUp />
                          <span>{comment.likes}</span>
                        </div>
                        <div>
                          {comment.replies.map((reply, replyIndex) => (
                            <div
                              key={replyIndex}
                              className="ml-4 p-2 sm:p-4 border-l border-gray-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-md sm:text-lg font-semibold">
                                  {reply.username}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-500">
                                  {reply.timestamp}
                                </span>
                              </div>
                              <div className="text-md sm:text-lg">
                                {reply.reply}
                              </div>
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                    </ul>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <textarea className="rounded border-2 border-DGXblue p-2" type="text" />
                    <button className="w-2/5 bg-DGXgreen hover:bg-DGXblue rounded text-white text-xl p-2 self-end">Add Comment</button>
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
