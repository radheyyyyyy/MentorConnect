import React, { useState } from 'react';

function Mentor() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    // ... other profile fields
  });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsEditMode(false);
  };

  return (
    <>
    
    <div>
      {isEditMode ? (
        <EditForm
        profileData={profileData}
        onSubmit={handleSubmit}
        onCancel={handleCancelClick}
        />
      ) : (
        <ViewMode profileData={profileData} onEditClick={handleEditClick} />
      )}
    </div>

function EditForm({ profileData, onSubmit, onCancel }) {
  // ... form fields and logic
}

function ViewMode({ profileData, onEditClick }) {
  // ... display profile data and edit button
}
  </>
);
export default Mentor;