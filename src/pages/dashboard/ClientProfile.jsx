// ClientProfile.js

import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner';

const ClientProfile = () => {
  const { user  } = useAuth();
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber || '' : '');

 
  const handleUpdateProfile = () => {
 
    console.log(`Updating profile: displayName - ${displayName}, phoneNumber - ${phoneNumber}`);
 
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-center items-center py-4">
          {user && user.photoURL ? (
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={user.photoURL}
              alt="Profile"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex justify-center items-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="text-center p-5">
          {isEditing ? (
            <>
              {/* Edit Name */}
              <div className="flex items-center justify-center mt-4">
                <input
                  type="text"
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-48 px-3 py-1"
                  placeholder="Enter your name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>

              {/* Add Phone Number */}
              <div className="flex items-center justify-center mt-2">
                <input
                  type="tel"
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-48 px-3 py-1"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1 focus:outline-none"
                  onClick={handleUpdateProfile}
                >
                  Save Changes
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">{user ? user.displayName : 'Loading...'}</h2>
              <p className="text-gray-600 mb-2">{user ? user.email : ''}</p>
              {user && user.phoneNumber && (
                <p className="text-gray-600 mb-2">Phone Number: {user.phoneNumber}</p>
              )}
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1 focus:outline-none mt-4"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
