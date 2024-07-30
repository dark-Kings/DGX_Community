import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white h-screen flex-shrink-0">
    <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
    <nav>
      <ul>
        <li><Link to="/home" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li>
        <li><Link to="/users" className="block py-2 px-4 hover:bg-gray-700">Users</Link></li>
        <li><Link to="/discussions" className="block py-2 px-4 hover:bg-gray-700">Discussions</Link></li>
        <li><Link to="/events" className="block py-2 px-4 hover:bg-gray-700">Events</Link></li>
        <li><Link to="/profile" className="block py-2 px-4 hover:bg-gray-700">Profiles</Link></li>
        <li><Link to="/guidelines" className="block py-2 px-4 hover:bg-gray-700">Guidelines</Link></li>
        <li><Link to="/contact" className="block py-2 px-4 hover:bg-gray-700">Contact Us</Link></li>
        <li><Link to="/search" className="block py-2 px-4 hover:bg-gray-700">Search & Resources</Link></li>
        <li><Link to="/surveys" className="block py-2 px-4 hover:bg-gray-700">Surveys & Quizzes</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
