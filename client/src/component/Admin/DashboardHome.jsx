import React from 'react';

const DashboardHome = () => (
  <div>
    <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-2xl">1200</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Active Discussions</h2>
        <p className="text-2xl">250</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
        <p className="text-2xl">15</p>
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="bg-white p-4 shadow rounded">
        {/* Recent activity feed */}
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <div className="bg-white p-4 shadow rounded">
        {/* Quick links */}
      </div>
    </div>
  </div>
);

export default DashboardHome;
