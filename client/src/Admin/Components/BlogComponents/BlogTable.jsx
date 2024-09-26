import React from 'react'

const BlogTable = ({blogs}) => {
  return (
    <div><table className="min-w-full table-auto border-collapse">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-4 py-2">ID</th>
        <th className="border px-4 py-2">Title</th>
        <th className="border px-4 py-2">Category</th>
        <th className="border px-4 py-2">Author</th>
        <th className="border px-4 py-2">Published Date</th>
        <th className="border px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {blogs.map((blog) => (
        <tr key={blog.id} className="border-t">
          <td className="border px-4 py-2">{blog.id}</td>
          <td className="border px-4 py-2">{blog.title}</td>
          <td className="border px-4 py-2">{blog.category}</td>
          <td className="border px-4 py-2">{blog.author}</td>
          <td className="border px-4 py-2">{blog.published_date}</td>
          <td className="border px-4 py-2"><button className="bg-DGXblue text-white px-4 py-1 rounded-lg">View</button></td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default BlogTable