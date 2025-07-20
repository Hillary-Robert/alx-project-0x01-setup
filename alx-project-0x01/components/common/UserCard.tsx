import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 m-3 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.username}</p>
      <p className="text-gray-700 mt-2">{user.email}</p>
      <p className="text-gray-700">{user.phone}</p>
      <p className="text-blue-600 underline">{user.website}</p>
      <div className="mt-3 text-sm text-gray-600">
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
      </div>
    </div>
  );
};

export default UserCard;
