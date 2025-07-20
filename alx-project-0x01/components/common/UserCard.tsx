import React from 'react';
import { UserProps } from '@/interfaces';




const UserCard: React.FC<UserProps> = ({ user }) => {
  const { name, username, email, phone, website, company, address } = user;

  return (
    <div className="bg-white rounded-lg shadow-md p-5 m-3 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>
      <p className="text-gray-700 mt-2">{email}</p>
      <p className="text-gray-700">{phone}</p>
      <p className="text-blue-600 underline">{website}</p>
      <div className="mt-3 text-sm text-gray-600">
        <p><strong>Company:</strong> {company?.name ?? 'N/A'}</p>
        <p><strong>Address:</strong> {address?.city}, {address?.street}</p>
      </div>
    </div>
  );
};

export default UserCard;
