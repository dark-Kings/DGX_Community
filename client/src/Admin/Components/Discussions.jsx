  import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed for notifications
import ApiContext from '../../context/ApiContext'; // Import your context if needed

const Discussions = () => {
  const { fetchData } = useContext(ApiContext); // Assuming you're using ApiContext
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const endpoint = "discussion/getdiscussion"; // Adjust port as necessary
        const method = "POST";
        const headers = {
          'Content-Type': 'application/json',
        };
        const body = { user: null }; // No user-specific data

        setLoading(true); // Start loading

        const response = await fetch(endpoint, {
          method,
          headers,
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data && data.updatedDiscussions) {
          setDiscussions(data.updatedDiscussions); // Update discussions state
        } else {
          throw new Error("Missing updatedDiscussions in response data");
        }
      } catch (error) {
        toast.error(`Something went wrong: ${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDiscussions();
  }, []);

  // Handle discussion approval
  const handleApprove = async (discussionId) => {
    const endpoint = `discussion/approve`; // Adjust your API endpoint
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = { discussionId };

    try {
      const result = await fetchData(endpoint, method, body, headers);
      if (result.success) {
        // Update local state to reflect the change
        setDiscussions(discussions.map(discussion => 
          discussion.DiscussionID === discussionId ? { ...discussion, approved: true } : discussion
        ));
        toast.success('Discussion approved successfully');
      } else {
        throw new Error(result.message || 'Failed to approve discussion');
      }
    } catch (error) {
      toast.error(`Error approving discussion: ${error.message}`);
    }
  };

  // Handle discussion rejection
  const handleReject = async (discussionId) => {
    const endpoint = `discussion/reject`; // Adjust your API endpoint
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = { discussionId };

    try {
      const result = await fetchData(endpoint, method, body, headers);
      if (result.success) {
        // Update local state to reflect the change
        setDiscussions(discussions.filter(discussion => discussion.DiscussionID !== discussionId));
        toast.success('Discussion rejected successfully');
      } else {
        throw new Error(result.message || 'Failed to reject discussion');
      }
    } catch (error) {
      toast.error(`Error rejecting discussion: ${error.message}`);
    }
  };

  // Handle discussion deletion
  const handleDelete = async (discussionId) => {
    const endpoint = `discussion/delete`; // Adjust your API endpoint
    const method = 'DELETE';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({ discussionId });

    try {
      const result = await fetchData(endpoint, method, body, headers);
      if (result.success) {
        setDiscussions(discussions.filter(discussion => discussion.DiscussionID !== discussionId)); // Remove deleted discussion from state
        toast.success('Discussion deleted successfully');
      } else {
        throw new Error(result.message || 'Failed to delete discussion');
      }
    } catch (error) {
      toast.error(`Error deleting discussion: ${error.message}`);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Admin - Manage Community Discussions
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Review and manage discussions in the DGX community.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">User ID</th>
            <th scope="col" className="px-6 py-3">Discussion ID</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Content</th>
            <th scope="col" className="px-6 py-3">Likes</th>
            <th scope="col" className="px-6 py-3">Comments</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" className="text-center">Loading...</td>
            </tr>
          ) : discussions.length > 0 ? (
            discussions.map((discussion) => (
              <tr key={discussion.DiscussionID} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {discussion.UserID}
                </th>
                <td className="px-6 py-4">{discussion.DiscussionID}</td>
                <td className="px-6 py-4">{discussion.Title}</td>
                <td className="px-6 py-4">{discussion.Content.substring(0, 50)}...</td>
                <td className="px-6 py-4">{discussion.likeCount}</td>
                <td className="px-6 py-4">{discussion.comment.length}</td>
                <td className="px-6 py-4 text-right">
                  {!discussion.approved && (
                    <>
                      <button
                        onClick={() => handleApprove(discussion.DiscussionID)}
                        className="mr-2 font-medium text-green-600 dark:text-green-500 hover:underline"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(discussion.DiscussionID)}
                        className="mr-2 font-medium text-yellow-600 dark:text-yellow-500 hover:underline"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(discussion.DiscussionID)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No discussions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Discussions;
