import React, { useState } from 'react';
import './Pages.css'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    photo: 'https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp',
    password: '',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e, field) => {
    setProfile((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Handle form submission (e.g., save changes)
    console.log('Profile updated:', profile);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="profile-photo">
        <img src={profile.photo} alt="Profile" />
        {isEditing && <input type="file" accept="image/*" onChange={handlePhotoChange} />}
      </div>

      <div className="profile-info">
        <div className="profile-field">
          <label>Name: </label>
          {isEditing ? (
            <input 
              className='input_profile'
              type="text"
              value={profile.name}
              onChange={(e) => handleChange(e, 'name')}
            />
          ) : (
            <span>{profile.name}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Email: </label>
          {isEditing ? (
            <input
            className='input_profile'
              type="email"
              value={profile.email}
              onChange={(e) => handleChange(e, 'email')}
            />
          ) : (
            <span>{profile.email}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Password: </label>
          {isEditing ? (
            <input
            className='input_profile'
              type="password"
              value={profile.password}
              onChange={(e) => handleChange(e, 'password')}
            />
          ) : (
            <span>******</span>
          )}
        </div>
        <div style={{display:"flex",justifyContent:"center"}}> 
        <button className='edit_profile_btn' onClick={handleEditClick}>
          {isEditing ? 'Save Changes' : 'Edit'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
