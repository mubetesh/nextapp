import React from 'react';

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">User Dashboard</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
