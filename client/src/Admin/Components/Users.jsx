import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const endpoint = "user/users"; // Ensure this is the correct endpoint
      const method = "GET";
      const headers = {
        'Content-Type': 'application/json'
      };
      console.log(headers, endpoint);

      try {
        console.log("Fetching user data...");
        const result = await fetchData(endpoint, method, {}, headers);
        console.log(result);
        setUsers(result.data); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching users:", error);
        setError('Failed to fetch user data'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    // Replace this with your actual delete API endpoint
    await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    });
    // Update the user list after deletion
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) return <div>Loading users...</div>; // Loading state
  if (error) return <div>Error: {error}</div>; // Error state

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white">
          Our users
          <p className="mt-1 text-sm font-normal text-gray-500">Browse a list of DGX community users.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">User ID</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">College Name</th>
            <th scope="col" className="px-6 py-3">Designation</th>
            <th scope="col" className="px-6 py-3"><span className="sr-only">Delete</span></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {user.id}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.collegeName}</td> {/* Adjust to match API response */}
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(user.id)}
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

export default Users;
