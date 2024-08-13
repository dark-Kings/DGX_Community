import React, { useEffect, useState } from 'react';

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const fetchDiscussions = async () => {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/discussions');
      const data = await response.json();
      setDiscussions(data);
    };

    fetchDiscussions();
  }, []);

  const handleDelete = async (discussionId) => {
    // Replace this with your actual delete API endpoint
    await fetch(`/api/discussions/${discussionId}`, {
      method: 'DELETE',
    });
    // Update the discussion list after deletion
    setDiscussions(discussions.filter(discussion => discussion.id !== discussionId));
  };

  const handleMoveToHighlights = async (discussionId) => {
    // Replace this with your actual API endpoint to move discussion to highlights
    await fetch(`/api/move-to-highlights/${discussionId}`, {
      method: 'POST',
    });
    // Update the discussion list after moving to highlights
    setDiscussions(discussions.filter(discussion => discussion.id !== discussionId));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Community Discussions
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse and manage discussions in the DGX community.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">User ID</th>
            <th scope="col" className="px-6 py-3">Discussion ID</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Likes</th>
            <th scope="col" className="px-6 py-3">Move to Highlights</th>
            <th scope="col" className="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {discussions.map((discussion) => (
            <tr key={discussion.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {discussion.userId}
              </th>
              <td className="px-6 py-4">{discussion.id}</td>
              <td className="px-6 py-4">{discussion.title}</td>
              <td className="px-6 py-4">{discussion.likes}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleMoveToHighlights(discussion.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Move to Highlights
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(discussion.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discussions;
