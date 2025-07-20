// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('address.')) {
      const key = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [key]: value,
        },
      });
    } else if (name.includes('company.')) {
      const key = name.split('.')[1];
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="name" onChange={handleChange} placeholder="Name" className="border p-2" required />
          <input name="username" onChange={handleChange} placeholder="Username" className="border p-2" required />
          <input name="email" onChange={handleChange} placeholder="Email" className="border p-2" required />
          <input name="phone" onChange={handleChange} placeholder="Phone" className="border p-2" />
          <input name="website" onChange={handleChange} placeholder="Website" className="border p-2" />

          {/* Address */}
          <input name="address.street" onChange={handleChange} placeholder="Street" className="border p-2" />
          <input name="address.city" onChange={handleChange} placeholder="City" className="border p-2" />

         
          <input name="company.name" onChange={handleChange} placeholder="Company Name" className="border p-2" />
          <input name="company.catchPhrase" onChange={handleChange} placeholder="Catch Phrase" className="border p-2" />

          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
