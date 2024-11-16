// Profile.js
import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const DEFAULT_PROFILE_PICTURE = "https://wallpapercave.com/wp/wp2712180.png";
  
  const [name, setName] = useState('Shaik.Rabbannie');
  const [email, setEmail] = useState('2300090093@kluniversity.in');
  const [jobTitle, setJobTitle] = useState('JAVA FULL STACK WEB DEVELOPER');
  const [DOB, setDateOfBirth] = useState('16-06-2006'); // ISO format for compatibility with input type="date"
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(DEFAULT_PROFILE_PICTURE);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => setIsEditing(false);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  return (
    <div className={`profile-container ${darkMode ? 'dark' : ''}`}>
      <h1>Profile</h1>

      <div className="profile-picture">
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-avatar"
        />
        <input type="file" onChange={handlePictureChange} />
      </div>

      <div className="profile-info">
        <h2>Personal Information</h2>
        {isEditing ? (
          <>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Job Title:
              <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label>
              Date Of Birth:
              <input type="date" value={DOB} onChange={(e) => setDateOfBirth(e.target.value)} />
            </label>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Job Title: {jobTitle}</p>
            <p>Date of Birth: {DOB}</p>
            <button onClick={handleEdit}>Edit Profile</button>
          </>
        )}
      </div>

      <div className="profile-settings">
        <h2>Settings</h2>
        <div className="setting-item">
          <label>
            Dark Mode:
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          </label>
        </div>
        <div className="setting-item">
          <label>
            Enable Notifications:
            <input type="checkbox" checked={notificationsEnabled} onChange={toggleNotifications} />
          </label>
        </div>
      </div>
    </div>
  );
}
